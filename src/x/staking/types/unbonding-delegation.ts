import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";

export type UnbondingDelegation = {
  deligator_addr: AccAddress;
  validator_addr: ValAddress;
  initial_balance: string;
  balance: string;
  creation_height: number;
  min_time: number;
}
