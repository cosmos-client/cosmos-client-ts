import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";

export interface Vote {
  proposal_id: Int32Array;
  voter: AccAddress;
}
