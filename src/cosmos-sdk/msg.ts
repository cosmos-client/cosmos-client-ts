import { AccAddress } from "./address/acc-address";

export interface Msg {
  route(): string;
  type(): string;
  validateBasic(): Error;
  getSignBytes(): Uint8Array;
  getSigners(): AccAddress[];
}