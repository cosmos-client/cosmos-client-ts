import { Msg } from "./msg";

export interface Tx {
  getMsgs(): Msg[];
  validateBasic(): Error;
}