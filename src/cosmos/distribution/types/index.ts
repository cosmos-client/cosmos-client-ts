import { codec } from "../../../codec";
import { CommunityPoolSpendProposal } from "./community-pool-spend-proposal";
import { MsgFundCommunityPool } from "./msg-fund-community-pool";
import { MsgSetWithdrawAddress } from "./msg-set-withdraw-address";
import { MsgWithdrawDelegatorReward } from "./msg-withdraw-delegator-reward";
import { MsgWithdrawValidatorCommission } from "./msg-withdraw-validator-commision";

export * from "./community-pool-spend-proposal";
export * from "./msg-set-withdraw-address";
export * from "./msg-withdraw-delegator-reward";
export * from "./msg-withdraw-validator-commision";
export * from "./msg-fund-community-pool";

// Register codec
codec.register(
  CommunityPoolSpendProposal["@type"],
  CommunityPoolSpendProposal,
  CommunityPoolSpendProposal.fromJSON,
);
codec.register(
  MsgFundCommunityPool["@type"],
  MsgFundCommunityPool,
  MsgFundCommunityPool.fromJSON,
);
codec.register(
  MsgSetWithdrawAddress["@type"],
  MsgSetWithdrawAddress,
  MsgSetWithdrawAddress.fromJSON,
);
codec.register(
  MsgWithdrawDelegatorReward["@type"],
  MsgWithdrawDelegatorReward,
  MsgWithdrawDelegatorReward.fromJSON,
);
codec.register(
  MsgWithdrawValidatorCommission["@type"],
  MsgWithdrawValidatorCommission,
  MsgWithdrawValidatorCommission.fromJSON,
);
