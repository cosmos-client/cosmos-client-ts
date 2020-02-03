import { AccAddress } from "../../../types/address/acc-address";

export interface Vote {
  proposal_id: Int32Array;
  voter: AccAddress;
}
