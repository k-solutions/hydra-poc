{-# OPTIONS_GHC -Wno-orphans #-}

-- | Orphans instances partly copied from Plutus, partly coming from us for test
-- purpose.
module Hydra.Plutus.Orphans where

import Hydra.Prelude

import Data.Aeson (object, withObject, (.:), (.=))
import qualified Data.Aeson as Aeson
import qualified Data.ByteString as BS
import qualified Data.ByteString.Base16 as Base16
import PlutusLedgerApi.V2 (CurrencySymbol, POSIXTime (..), PubKeyHash (..), TokenName, TxId (..), TxOutRef (..), UpperBound, Value, upperBound)
import qualified PlutusTx.AssocMap as AssocMap
import PlutusTx.Prelude (BuiltinByteString, fromBuiltin, toBuiltin)
import Test.QuickCheck (choose, vectorOf)
import Test.QuickCheck.Instances.ByteString ()

instance Arbitrary BuiltinByteString where
  arbitrary = toBuiltin <$> (arbitrary :: Gen ByteString)

instance Arbitrary TokenName where
  arbitrary = genericArbitrary
  shrink = genericShrink

instance Arbitrary CurrencySymbol where
  arbitrary = genericArbitrary
  shrink = genericShrink

instance Arbitrary Value where
  arbitrary = genericArbitrary
  shrink = genericShrink

instance (Arbitrary k, Arbitrary v) => Arbitrary (AssocMap.Map k v) where
  arbitrary = AssocMap.fromList <$> arbitrary

instance Arbitrary POSIXTime where
  arbitrary = POSIXTime <$> arbitrary

instance ToJSON POSIXTime where
  toJSON (POSIXTime ms) = toJSON ms

instance FromJSON POSIXTime where
  parseJSON = fmap POSIXTime . parseJSON

instance Arbitrary a => Arbitrary (UpperBound a) where
  arbitrary = upperBound <$> arbitrary

instance ToJSON PubKeyHash where
  toJSON = \kh ->
    object
      [ "tag" .= Aeson.String "PubKeyHash"
      , "keyHash" .= Aeson.String (decodeUtf8 $ Base16.encode $ fromBuiltin $ getPubKeyHash kh)
      ]

instance FromJSON PubKeyHash where
  parseJSON = withObject "PubKeyHash" $ \o -> do
    tag <- o .: "tag"
    case tag :: Text of
      "PubKeyHash" -> do
        hexText :: Text <- o .: "keyHash"
        case Base16.decode $ encodeUtf8 hexText of
          Left e -> fail e
          Right bs -> pure $ PubKeyHash (toBuiltin bs)
      _ -> fail "Expected tag to be PubKeyHash"

instance Arbitrary PubKeyHash where
  arbitrary = genericArbitrary

instance Arbitrary TxOutRef where
  arbitrary = do
    txId <- TxId . toBuiltin . BS.pack <$> vectorOf 32 arbitrary
    txIx <- choose (0, 99)
    pure $ TxOutRef txId txIx
