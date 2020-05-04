import {
  MsgBeginRedelegate,
  MsgCreateValidator,
  MsgDelegate,
  MsgEditValidator,
  MsgUndelegate,
} from "./types";
import { codec } from "../../codec";

export * as staking from "./module";
export * from "./types";

// Register Codec
codec.registerCodec(
  "cosmos-sdk/MsgBeginRedelegate",
  MsgBeginRedelegate,
  MsgBeginRedelegate.fromJSON,
);
codec.registerCodec(
  "cosmos-sdk/MsgCreateValidator",
  MsgCreateValidator,
  MsgCreateValidator.fromJSON,
);
codec.registerCodec(
  "cosmos-sdk/MsgDelegate",
  MsgDelegate,
  MsgDelegate.fromJSON,
);
codec.registerCodec(
  "cosmos-sdk/MsgEditValidator",
  MsgEditValidator,
  MsgEditValidator.fromJSON,
);
codec.registerCodec(
  "cosmos-sdk/MsgUndelegate",
  MsgUndelegate,
  MsgUndelegate.fromJSON,
);
