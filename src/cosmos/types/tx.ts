import { AnyI } from "../../codec/any";
import { Msg } from "./msg";

export type Tx = AnyI & {
  getMsgs(): Msg[];
  validateBasic(): Error | null;
};
