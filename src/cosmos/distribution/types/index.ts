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
codec.registerCodec(
  CommunityPoolSpendProposal["@type"],
  CommunityPoolSpendProposal,
  CommunityPoolSpendProposal.fromJSON,
);
codec.registerCodec(
  MsgFundCommunityPool["@type"],
  MsgFundCommunityPool,
  MsgFundCommunityPool.fromJSON,
);
codec.registerCodec(
  MsgSetWithdrawAddress["@type"],
  MsgSetWithdrawAddress,
  MsgSetWithdrawAddress.fromJSON,
);
codec.registerCodec(
  MsgWithdrawDelegatorReward["@type"],
  MsgWithdrawDelegatorReward,
  MsgWithdrawDelegatorReward.fromJSON,
);
codec.registerCodec(
  MsgWithdrawValidatorCommission["@type"],
  MsgWithdrawValidatorCommission,
  MsgWithdrawValidatorCommission.fromJSON,
);
