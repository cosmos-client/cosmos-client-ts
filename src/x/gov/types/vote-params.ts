import { AccAddress } from "../../../types/address/acc-address";

export type Vote = {
  proposal_id: Int32Array;
  voter: AccAddress;
}
