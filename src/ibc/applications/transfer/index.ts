import { codec } from "../../../codec";

// export * as transfer from './module';
import * as transfer from "./module";
import { MsgTransfer } from "./types";
export { transfer };

codec.registerCodec(MsgTransfer["@type"], MsgTransfer, MsgTransfer.fromJSON);
