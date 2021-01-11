import {
  CommunityPoolSpendProposal,
  MsgFundCommunityPool,
  MsgSetWithdrawAddress,
  MsgWithdrawValidatorCommission,
  MsgWithdrawDelegatorReward,
} from "./types";
import { codec } from "../../codec";

// export * as distribution from "./module";
import * as distribution from "./module";
export { distribution };
export * from "./types";

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
