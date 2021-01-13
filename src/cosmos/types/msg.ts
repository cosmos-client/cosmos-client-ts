import { AnyI } from "../../codec/any";

export type Msg = AnyI & {
  getSignBytes(): Buffer;
};
