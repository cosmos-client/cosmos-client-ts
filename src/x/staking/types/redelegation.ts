import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";

export interface Redelegation {
  delegator_addr: AccAddress;
  validator_src_addr: ValAddress;
  validator_dst_addr: ValAddress;
  creation_height: number;
  min_time: number;
  initial_balance: string;
  balance: string;
  shares_src: string;
  shares_dst: string;
}
