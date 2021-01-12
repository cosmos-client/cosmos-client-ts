import { codec } from "../../../codec";
import { MsgBeginRedelegate } from "./msg-begin-redelegate";
import { MsgCreateValidator } from "./msg-create-validator";
import { MsgDelegate } from "./msg-delegate";
import { MsgEditValidator } from "./msg-edit-validator";
import { MsgUndelegate } from "./msg-undelegate";

export * from "./msg-begin-redelegate";
export * from "./msg-create-validator";
export * from "./msg-delegate";
export * from "./msg-edit-validator";
export * from "./msg-undelegate";

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
