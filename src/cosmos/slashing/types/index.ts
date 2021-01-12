import { codec } from "../../../codec";
import { MsgUnjail } from "../types";

export * from "./msg-unjail";

// Register codec
codec.registerCodec(MsgUnjail["@type"], MsgUnjail, MsgUnjail.fromJSON);
