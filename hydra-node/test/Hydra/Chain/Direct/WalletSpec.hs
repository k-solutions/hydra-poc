{-# LANGUAGE PatternSynonyms #-}
{-# LANGUAGE TypeApplications #-}

module Hydra.Chain.Direct.WalletSpec where

import Hydra.Prelude hiding (label)
import Test.Hydra.Prelude

import qualified Cardano.Api.Shelley as Cardano.Api
import Cardano.Ledger.Alonzo.Language (Language (PlutusV1))
import Cardano.Ledger.Alonzo.PParams (PParams, PParams' (..))
import Cardano.Ledger.Alonzo.Scripts (ExUnits (..), Prices (..))
import Cardano.Ledger.Alonzo.Tx (ValidatedTx (..))
import Cardano.Ledger.Alonzo.TxBody (TxBody (..), pattern TxOut)
import Cardano.Ledger.Alonzo.TxSeq (TxSeq (..))
import Cardano.Ledger.BaseTypes (boundRational)
import Cardano.Ledger.Block (bbody)
import Cardano.Ledger.Coin (Coin (..))
import Cardano.Ledger.Keys (VKey (..))
import qualified Cardano.Ledger.SafeHash as SafeHash
import Cardano.Ledger.Shelley.API (BHeader, UTxO (unUTxO))
import qualified Cardano.Ledger.Shelley.API as Ledger
import Cardano.Ledger.Val (Val (..))
import Control.Monad.Class.MonadTimer (timeout)
import Control.Tracer (nullTracer)
import Data.Default (def)
import qualified Data.Map.Strict as Map
import Data.Maybe (fromJust)
import Data.Ratio ((%))
import qualified Data.Sequence.Strict as StrictSeq
import qualified Data.Set as Set
import Hydra.Chain.Direct.MockServer (withMockServer)
import Hydra.Chain.Direct.Util (Era, VerificationKey)
import Hydra.Chain.Direct.Wallet (
  Address,
  TxIn,
  TxOut,
  applyBlock,
  coverFee_,
  generateKeyPair,
  watchUtxoUntil,
  withTinyWallet,
 )
import Hydra.Ledger.Cardano (NetworkId (Testnet), NetworkMagic, TxBodyContent (..), Utxo, Utxo' (Utxo), fromShelleyTxIn, genOneUtxo, getTxFee, getValue, lookupTxIn, lovelaceToValue, makeTransactionBody, mkVkAddress, negateValue, toLedgerAddr, toLedgerUtxo)
import qualified Hydra.Ledger.Cardano as Api
import Ouroboros.Consensus.Cardano.Block (HardForkBlock (..))
import Ouroboros.Consensus.Shelley.Ledger (mkShelleyBlock)
import Test.Cardano.Ledger.Alonzo.PlutusScripts (defaultCostModel)
import Test.Cardano.Ledger.Alonzo.Serialisation.Generators ()
import Test.QuickCheck (
  Property,
  checkCoverage,
  conjoin,
  counterexample,
  cover,
  forAll,
  forAllBlind,
  frequency,
  generate,
  getSize,
  label,
  property,
  scale,
  suchThat,
  vectorOf,
 )
import qualified Prelude

spec :: Spec
spec = parallel $ do
  describe "genBlock / genUtxo" $ do
    prop "are well-suited for testing" prop_wellSuitedGenerators

  describe "applyBlock" $ do
    prop "only reduces the UTXO set when no address is ours" prop_reducesWhenNotOurs
    prop "Seen inputs are consumed and not in the resulting UTXO" prop_seenInputsAreConsumed

  describe "coverFee" $ do
    prop "balances transaction with fees" prop_balanceTransaction
    prop "transaction's inputs are removed from wallet" prop_removeUsedInputs

  describe "withTinyWallet" $ do
    (vk, sk) <- runIO generateKeyPair
    it "connects to server and returns UTXO in a timely manner" $ do
      withMockServer $ \networkMagic iocp socket _ -> do
        withTinyWallet nullTracer networkMagic (vk, sk) iocp socket $ \wallet -> do
          result <- timeout 10 $ watchUtxoUntil (const True) wallet
          result `shouldSatisfy` isJust

    it "tracks UTXO correctly when payments are received" $ do
      withMockServer $ \magic iocp socket submitTx -> do
        withTinyWallet nullTracer magic (vk, sk) iocp socket $ \wallet -> do
          generate (genPaymentTo magic vk) >>= submitTx
          result <- timeout 10 $ watchUtxoUntil (not . null) wallet
          result `shouldSatisfy` isJust

--
-- Generators
--

prop_wellSuitedGenerators ::
  Property
prop_wellSuitedGenerators =
  forAll genUtxo $ \utxo -> do
    forAllBlind (genBlock utxo) $ \blk ->
      property (smallTxSets blk)
        & cover 0.3 (noneIsOurs utxo blk) "has no tx that are ours"
        & cover 0.2 (someAreDependent utxo blk) "has dependent txs"
        & checkCoverage
        & counterexample ("All TxIns: " <> show (length $ allTxIns blk))
        & counterexample ("All TxOuts: " <> show (length $ allTxOuts blk))
        & counterexample ("Our TxIns: " <> show (length $ ourDirectInputs utxo blk))
        & counterexample ("Our TxOuts: " <> show (length $ ourOutputs utxo blk))
 where
  smallTxSets blk =
    length (txSeqTxns $ bbody blk) <= 10

  noneIsOurs utxo blk =
    null (ourDirectInputs utxo blk) && null (ourOutputs utxo blk)

  someAreDependent utxo blk =
    length (ourDirectInputs utxo blk) < length (ourOutputs utxo blk)

--
-- applyBlocks
--

prop_reducesWhenNotOurs ::
  Property
prop_reducesWhenNotOurs =
  forAll genUtxo $ \utxo ->
    forAllBlind (genBlock utxo) $ \blk ->
      let utxo' = applyBlock (BlockAlonzo $ mkShelleyBlock blk) (const False) utxo
       in (length utxo' <= length utxo)
            & counterexample ("New UTXO: " <> show utxo')
            & counterexample ("UTXO size:     " <> show (length utxo))
            & counterexample ("New UTXO size: " <> show (length utxo'))

prop_seenInputsAreConsumed ::
  Property
prop_seenInputsAreConsumed =
  forAll genUtxo $ \utxo ->
    forAllBlind (genBlock utxo) $ \blk ->
      let utxo' = applyBlock (BlockAlonzo $ mkShelleyBlock blk) (isOurs utxo) utxo
          seenInputs = fromList $ ourDirectInputs utxo blk
       in null (Map.restrictKeys utxo' seenInputs)
            & counterexample ("Seen inputs: " <> show seenInputs)
            & counterexample ("New UTXO:    " <> show utxo')

--
-- coverFee
--

prop_balanceTransaction ::
  Property
prop_balanceTransaction =
  forAllBlind (reasonablySized genValidatedTx) $ \tx ->
    forAllBlind (reasonablySized $ genOutputsForInputs tx) $ \lookupUtxo ->
      forAllBlind (reasonablySized genOneUtxo) $ \walletUtxo ->
        let arbitraryBodyContents = error "WIP"
         in prop' lookupUtxo walletUtxo arbitraryBodyContents
 where
  prop' lookupUtxo walletUtxo txDraft =
    case coverFee_ pparams lookupUtxo (unUTxO $ toLedgerUtxo walletUtxo) txDraft of
      Left{} ->
        property True & label "Left"
      Right (_, tx') ->
        let inp' = knownInputBalance (lookupUtxo <> walletUtxo) tx'
            out' = outputBalance tx'
            Right tx = makeTransactionBody txDraft
            out = outputBalance tx
            fee = getTxFee tx'
            delta = out' <> negateValue inp'
         in conjoin
              [ delta == lovelaceToValue fee
              ]
              & label "Right"
              & counterexample ("Fee:             " <> show fee)
              & counterexample ("Delta value:     " <> show delta)
              & counterexample ("Added value:     " <> show inp')
              & counterexample ("Outputs after:   " <> show out')
              & counterexample ("Outputs before:  " <> show out)

prop_removeUsedInputs ::
  Property
prop_removeUsedInputs =
  forAllBlind (reasonablySized genValidatedTx) $ \tx ->
    forAllBlind (reasonablySized $ genOutputsForInputs tx) $ \txUtxo ->
      forAllBlind (reasonablySized genUtxo) $ \extraUtxo ->
        let arbitraryBodyContents = error "WIP"
         in -- HACK(SN): complete these conversions one way or the other
            prop' txUtxo (unUTxO (toLedgerUtxo txUtxo) <> extraUtxo) arbitraryBodyContents
 where
  prop' txUtxo walletUtxo txDraft =
    case coverFee_ pparams mempty walletUtxo txDraft of
      Left e ->
        property True & label (show e)
      Right (utxo', _) ->
        null (Map.intersection walletUtxo utxo')
          & label "Right"
          & counterexample ("Remaining UTXO: " <> show utxo')
          & counterexample ("Tx UTxO: " <> show txUtxo)
          & counterexample ("Wallet UTXO: " <> show walletUtxo)

--
-- Generators
--

-- | Generate an arbitrary block, from a UTXO set such that, transactions may
-- *sometimes* consume given UTXO and produce new ones. The generator is geared
-- towards certain use-cases,
genBlock :: Map TxIn TxOut -> Gen (Ledger.Block BHeader Era)
genBlock utxo = scale (round @Double . sqrt . fromIntegral) $ do
  header <- arbitrary
  body <- TxSeq . StrictSeq.fromList <$> evalStateT genTxs utxo
  pure $ Ledger.Block header body
 where
  genTxs :: StateT (Map TxIn TxOut) Gen [ValidatedTx Era]
  genTxs = do
    n <- lift getSize
    replicateM n genTx

  genTx :: StateT (Map TxIn TxOut) Gen (ValidatedTx Era)
  genTx = do
    genBody <-
      lift $
        frequency
          [ (4, pure $ lift arbitrary)
          , (1, pure genBodyFromUtxo)
          ]
    body <- genBody
    lift $
      ValidatedTx body
        <$> arbitrary
        <*> arbitrary
        <*> arbitrary

  -- Generate a TxBody by consuming a UTXO from the state, and generating a new
  -- one. The number of UTXO in the state after calling this function remains
  -- identical.
  genBodyFromUtxo :: StateT (Map TxIn TxOut) Gen (TxBody Era)
  genBodyFromUtxo = do
    base <- lift arbitrary
    (input, output) <- gets Map.findMax
    let body =
          base
            { inputs = Set.singleton input
            , outputs = StrictSeq.fromList [output]
            }
    let input' = Ledger.TxIn (Ledger.TxId $ SafeHash.hashAnnotated body) 0
    modify (\m -> m & Map.delete input & Map.insert input' output)
    pure body

genUtxo :: Gen (Map TxIn TxOut)
genUtxo = do
  tx <- arbitrary `suchThat` (\tx -> length (outputs (body tx)) >= 1)
  txIn <- arbitrary
  let txOut = scaleAda $ Prelude.head $ toList $ outputs $ body tx
  pure $ Map.singleton txIn txOut
 where
  scaleAda :: TxOut -> TxOut
  scaleAda (TxOut addr value datum) =
    let value' = value <> inject (Coin 20_000_000)
     in TxOut addr value' datum

genOutputsForInputs :: ValidatedTx Era -> Gen Utxo
genOutputsForInputs ValidatedTx{body} = do
  let n = Set.size (inputs body)
  outs <- vectorOf n arbitrary
  pure $ Utxo . Map.fromList $ zip (map fromShelleyTxIn $ toList (inputs body)) outs

genValidatedTx :: Gen (ValidatedTx Era)
genValidatedTx = do
  tx <- arbitrary
  body <- (\x -> x{txfee = Coin 0}) <$> arbitrary
  pure $ tx{body}

genPaymentTo :: NetworkMagic -> VerificationKey -> Gen (ValidatedTx Era)
genPaymentTo magic vk = do
  toValidatedTx =<< arbitrary @TxOut `suchThat` atLeast 2_000_000_000
 where
  atLeast v = \case
    TxOut _ value _ ->
      coin value > Coin v

  toValidatedTx = \case
    TxOut _ value datum -> do
      ValidatedTx{body, wits, isValid, auxiliaryData} <- arbitrary
      let myAddr =
            toLedgerAddr $
              mkVkAddress (Testnet magic) $ Cardano.Api.PaymentVerificationKey $ VKey vk
      pure $
        ValidatedTx
          { body =
              body
                { outputs =
                    StrictSeq.fromList [TxOut myAddr value datum]
                }
          , wits
          , isValid
          , auxiliaryData
          }

--
-- Helpers
--

allTxIns :: Ledger.Block h Era -> Set TxIn
allTxIns (txSeqTxns . bbody -> txs) =
  Set.unions (inputs . body <$> txs)

allTxOuts :: Ledger.Block h Era -> [TxOut]
allTxOuts (txSeqTxns . bbody -> txs) =
  toList $ mconcat $ toList (outputs . body <$> txs)

isOurs :: Map TxIn TxOut -> Address -> Bool
isOurs utxo addr =
  addr `elem` ((\(TxOut addr' _ _) -> addr') <$> Map.elems utxo)

-- NOTE: 'direct' here means inputs that can be identified from our initial
-- UTXO set. UTXOs that are created in a transaction from that blk aren't
-- counted here.
ourDirectInputs :: Map TxIn TxOut -> Ledger.Block h Era -> [TxIn]
ourDirectInputs utxo blk =
  Map.keys $ Map.restrictKeys utxo (allTxIns blk)

ourOutputs :: Map TxIn TxOut -> Ledger.Block h Era -> [TxOut]
ourOutputs utxo blk =
  let ours = Map.elems utxo
   in filter (`elem` ours) (allTxOuts blk)

-- TODO(SN): candidates to move into our Cardano module

-- | NOTE: This does not account for withdrawals
knownInputBalance :: Utxo -> Api.TxBody Api.Era -> Api.Value
knownInputBalance utxo (Api.TxBody TxBodyContent{txIns}) =
  foldMap (resolve . fst) txIns
 where
  resolve :: Api.TxIn -> Api.Value
  resolve k = maybe mempty getValue (lookupTxIn k utxo)

-- | NOTE: This does not account for deposits
outputBalance :: Api.TxBody Api.Era -> Api.Value
outputBalance (Api.TxBody TxBodyContent{txOuts}) =
  foldMap getValue txOuts

pparams :: PParams Era
pparams =
  def
    { _costmdls = Map.singleton PlutusV1 $ fromJust defaultCostModel
    , _maxTxExUnits = ExUnits 10 10
    , _prices =
        Prices
          { prMem = fromJust $ boundRational (1 % 1)
          , prSteps = fromJust $ boundRational (1 % 1)
          }
    }
