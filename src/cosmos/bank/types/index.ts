import { codec } from "../../../codec";
import { MsgMultiSend } from "./msg-multi-send";
import { MsgSend } from "./msg-send";

export * from "./msg-multi-send";
export * from "./msg-send";

// Register codec
codec.register(MsgSend["@type"], MsgSend, MsgSend.fromJSON);
codec.register(MsgMultiSend["@type"], MsgMultiSend, MsgMultiSend.fromJSON);
