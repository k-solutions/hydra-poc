{-# OPTIONS_GHC -Wno-orphans #-}

module Hydra.Cardano.Api.ScriptData where

import Hydra.Cardano.Api.Prelude

import Cardano.Api.Byron (TxBody (..))
import qualified Cardano.Ledger.Alonzo.Scripts.Data as Ledger
import qualified Cardano.Ledger.Alonzo.TxWits as Ledger
import qualified Cardano.Ledger.Era as Ledger
import Codec.Serialise (deserialiseOrFail, serialise)
import Control.Arrow (left)
import Data.Aeson (Value (String), withText)
import qualified Data.ByteString as BS
import qualified Data.ByteString.Base16 as Base16
import qualified Data.Map as Map
import qualified PlutusLedgerApi.V2 as Plutus
import Test.QuickCheck (arbitrarySizedNatural, choose, oneof, scale, sized, vector)

-- * Extras

-- | Data-types that can be marshalled into a generic 'ScriptData' structure.
type ToScriptData a = Plutus.ToData a

-- | Data-types that can be unmarshalled from a generic 'ScriptData' structure.
type FromScriptData a = Plutus.FromData a

-- | Serialise some type into a generic script data.
toScriptData :: ToScriptData a => a -> HashableScriptData
toScriptData =
  -- NOTE: Safe to use here as the data was not available in serialized form.
  unsafeHashableScriptData . fromPlutusData . Plutus.toData

-- | Deserialise some generic script data into some type.
fromScriptData :: FromScriptData a => HashableScriptData -> Maybe a
fromScriptData =
  Plutus.fromData . toPlutusData . getScriptData

-- | Get the 'HashableScriptData' associated to the a 'TxOut'. Note that this
-- requires the 'CtxTx' context. To get script data in a 'CtxUTxO' context, see
-- 'lookupScriptData'.
txOutScriptData :: TxOut CtxTx era -> Maybe HashableScriptData
txOutScriptData (TxOut _ _ d _) =
  case d of
    TxOutDatumInTx _ sd -> Just sd
    TxOutDatumInline _ sd -> Just sd
    _ -> Nothing

-- | Lookup included datum of given 'TxOut'.
lookupScriptData ::
  forall era.
  ( UsesStandardCrypto era
  , Ledger.Era (ShelleyLedgerEra era)
  ) =>
  Tx era ->
  TxOut CtxUTxO era ->
  Maybe HashableScriptData
lookupScriptData (Tx ByronTxBody{} _) _ = Nothing
lookupScriptData (Tx (ShelleyTxBody _ _ _ scriptsData _ _) _) (TxOut _ _ datum _) =
  case datum of
    TxOutDatumNone ->
      Nothing
    (TxOutDatumHash _ (ScriptDataHash h)) ->
      fromLedgerData <$> Map.lookup h datums
    (TxOutDatumInline _ dat) ->
      Just dat
 where
  datums = case scriptsData of
    TxBodyNoScriptData -> mempty
    TxBodyScriptData _ (Ledger.TxDats m) _ -> m

-- * Type Conversions

-- | Convert a cardano-ledger script 'Data' into a cardano-api 'ScriptDatum'.
fromLedgerData :: Ledger.Data era -> HashableScriptData
fromLedgerData =
  fromAlonzoData

-- | Convert a cardano-api script data into a cardano-ledger script 'Data'.
toLedgerData :: Ledger.Era era => HashableScriptData -> Ledger.Data era
toLedgerData =
  toAlonzoData

-- * Orphans

instance ToJSON ScriptData where
  toJSON =
    String
      . decodeUtf8
      . Base16.encode
      . toStrict
      . serialise
      . toPlutusData

instance FromJSON ScriptData where
  parseJSON v = do
    text :: Text <- parseJSON v
    either fail (pure . fromPlutusData) $ do
      bytes <- Base16.decode (encodeUtf8 text)
      left show $ deserialiseOrFail $ fromStrict bytes

instance Arbitrary ScriptData where
  arbitrary =
    scale (`div` 2) $
      oneof
        [ ScriptDataConstructor <$> arbitrarySizedNatural <*> arbitrary
        , ScriptDataNumber <$> arbitrary
        , ScriptDataBytes <$> arbitraryBS
        , ScriptDataList <$> arbitrary
        , ScriptDataMap <$> arbitrary
        ]
   where
    arbitraryBS = sized $ \n ->
      BS.pack <$> (choose (0, min n 64) >>= vector)

instance ToJSON HashableScriptData where
  toJSON = String . decodeUtf8 . Base16.encode . serialiseToCBOR

instance FromJSON HashableScriptData where
  parseJSON =
    withText "HashableScriptData" $ \text -> do
      bytes <- either (fail . show) pure $ Base16.decode $ encodeUtf8 text
      either (fail . show) pure $ deserialiseFromCBOR (proxyToAsType Proxy) bytes

instance Arbitrary HashableScriptData where
  arbitrary =
    -- NOTE: Safe to use here as the data was not available in serialized form.
    unsafeHashableScriptData <$> arbitrary
