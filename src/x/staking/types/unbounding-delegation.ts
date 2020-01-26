import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";

export interface UnboundingDelegation {
  deligator_addr: AccAddress;
  validator_addr: ValAddress;
  initial_balance: string;
  balance: string;
  creation_height: number;
  min_time: number;
}
