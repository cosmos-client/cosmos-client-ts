import { codec } from "../../../../codec";
import { MsgTransfer } from "./msg-transfer";

export * from "./msg-transfer";

codec.register(MsgTransfer["@type"], MsgTransfer, MsgTransfer.fromJSON);
