import { codec } from "../../../../codec";
import { MsgTransfer } from "./msg-transfer";

export * from "./msg-transfer";

codec.registerCodec(MsgTransfer["@type"], MsgTransfer, MsgTransfer.fromJSON);
