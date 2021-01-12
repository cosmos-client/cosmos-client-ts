import { codec } from "../../../codec";
import { MsgMultiSend } from "./msg-multi-send";
import { MsgSend } from "./msg-send";

export * from "./msg-multi-send";
export * from "./msg-send";

// Register codec
codec.registerCodec(MsgSend["@type"], MsgSend, MsgSend.fromJSON);
codec.registerCodec(MsgMultiSend["@type"], MsgMultiSend, MsgMultiSend.fromJSON);
