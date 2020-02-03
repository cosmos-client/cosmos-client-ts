import { AccAddress } from "../../../types/address/acc-address";

export interface Deposit {
  proposal_id: Int32Array;
  depositer: AccAddress;
}
