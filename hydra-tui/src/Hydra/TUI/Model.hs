{-# LANGUAGE DuplicateRecordFields #-}
{-# LANGUAGE LambdaCase #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeApplications #-}
{-# OPTIONS_GHC -Wno-orphans #-}

module Hydra.TUI.Model where

import Hydra.Prelude hiding (Down, State, padLeft)

import Hydra.Cardano.Api

import Brick.Forms (Form)
import Hydra.Chain (HeadId)
import Hydra.Chain.Direct.State ()
import Hydra.Client (HydraEvent (..))
import Hydra.Network (Host (..), NodeId)
import Hydra.Party (Party (..))
import Hydra.TUI.Logging.Types (LogState)
import Lens.Micro.TH (makeLensesFor)

data RootState = RootState
  { nodeHost :: Host
  , now :: UTCTime
  , connectedState :: ConnectedState
  , logState :: LogState
  }

data ConnectedState
  = Disconnected
  | Connected {connection :: Connection}

data IdentifiedState
  = Unidentified
  | Identified Party

data Connection = Connection
  { me :: IdentifiedState
  , peers :: [NodeId]
  , headState :: HeadState
  }

type UTxOCheckboxForm e n = Form (Map TxIn (TxOut CtxUTxO, Bool)) e n

type UTxORadioFieldForm e n = Form (TxIn, TxOut CtxUTxO) e n

data InitializingState = InitializingState
  { remainingParties :: [Party]
  , initializingScreen :: InitializingScreen
  }

data InitializingScreen
  = InitializingHome
  | CommitMenu {commitMenu :: UTxOCheckboxForm (HydraEvent Tx) Name}

data OpenScreen
  = OpenHome
  | SelectingUTxO {selectingUTxOForm :: UTxORadioFieldForm (HydraEvent Tx) Name}
  | EnteringAmount {utxoSelected :: (TxIn, TxOut CtxUTxO), enteringAmountForm :: Form Integer (HydraEvent Tx) Name}
  | SelectingRecipient {utxoSelected :: (TxIn, TxOut CtxUTxO), amountEntered :: Integer, selectingRecipientForm :: Form AddressInEra (HydraEvent Tx) Name}

newtype ClosedState = ClosedState {contestationDeadline :: UTCTime}

data HeadState
  = Idle
  | Active {activeLink :: ActiveLink}

data ActiveLink = ActiveLink
  { utxo :: UTxO
  , parties :: [Party]
  , headId :: HeadId
  , activeHeadState :: ActiveHeadState
  }

data ActiveHeadState
  = Initializing {initializingState :: InitializingState}
  | Open {openState :: OpenScreen}
  | Closed {closedState :: ClosedState}
  | FanoutPossible
  | Final

type Name = Text

makeLensesFor
  [ ("selectingUTxOForm", "selectingUTxOFormL")
  , ("enteringAmountForm", "enteringAmountFormL")
  , ("selectingRecipientForm", "selectingRecipientFormL")
  ]
  ''OpenScreen

makeLensesFor
  [ ("initializingState", "initializingStateL")
  , ("openState", "openStateL")
  , ("closedState", "closedStateL")
  ]
  ''ActiveHeadState

makeLensesFor
  [ ("connectedState", "connectedStateL")
  , ("nodeHost", "nodeHostL")
  , ("now", "nowL")
  , ("logState", "logStateL")
  ]
  ''RootState

makeLensesFor
  [("connection", "connectionL")]
  ''ConnectedState

makeLensesFor
  [ ("commitMenu", "commitMenuL")
  ]
  ''InitializingScreen

makeLensesFor
  [ ("transitionNote", "transitionNoteL")
  , ("me", "meL")
  , ("peers", "peersL")
  , ("headState", "headStateL")
  ]
  ''Connection

makeLensesFor
  [ ("remainingParties", "remainingPartiesL")
  , ("initializingScreen", "initializingScreenL")
  ]
  ''InitializingState

makeLensesFor
  [ ("activeLink", "activeLinkL")
  ]
  ''HeadState

makeLensesFor
  [ ("utxo", "utxoL")
  , ("parties", "partiesL")
  , ("activeHeadState", "activeHeadStateL")
  , ("headId", "headIdL")
  ]
  ''ActiveLink

fullFeedbackViewportName :: Name
fullFeedbackViewportName = "full-feedback-view-port"

shortFeedbackViewportName :: Name
shortFeedbackViewportName = "short-feedback-view-port"

emptyConnection :: Connection
emptyConnection =
  Connection
    { me = Unidentified
    , peers = []
    , headState = Idle
    }

newActiveLink :: [Party] -> HeadId -> ActiveLink
newActiveLink parties headId =
  ActiveLink
    { parties
    , activeHeadState =
        Initializing
          { initializingState =
              InitializingState
                { remainingParties = parties
                , initializingScreen = InitializingHome
                }
          }
    , utxo = mempty
    , headId
    }
