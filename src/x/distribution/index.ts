import {
  CommunityPoolSpendProposal,
  MsgSetWithdrawAddress,
  MsgWithdrawValidatorCommission,
} from "./types";
import { codec } from "../../codec";

export * as distribution from "./module";
export * from "./types";

// Register codec
codec.registerCodec(
  "cosmos-sdk/CommunityPoolSpendProposal",
  CommunityPoolSpendProposal,
  CommunityPoolSpendProposal.fromJSON,
);
codec.registerCodec(
  "cosmos-sdk/MsgModifyWithdrawAddress",
  MsgSetWithdrawAddress,
  MsgSetWithdrawAddress.fromJSON,
);
codec.registerCodec(
  "cosmos-sdk/MsgWithdrawValidatorCommission",
  MsgWithdrawValidatorCommission,
  MsgWithdrawValidatorCommission.fromJSON,
);
