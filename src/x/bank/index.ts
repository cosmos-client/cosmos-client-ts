import { MsgSend, MsgMultiSend, SendReq } from "./types";
import { codec } from "../../codec";
import * as bank from "./module";

export { bank };
export * from "./types";

// Register codec
codec.registerCodec("cosmos-sdk/MsgSend", MsgSend, MsgSend.fromJSON);
codec.registerCodec(
  "cosmos-sdk/MsgMultiSend",
  MsgMultiSend,
  MsgMultiSend.fromJSON
);
