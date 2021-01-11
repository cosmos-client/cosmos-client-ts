import { Any } from "./any";
import { Msg } from "./msg";

export type Tx = Any & {
  getMsgs(): Msg[];
  validateBasic(): Error | null;
};
