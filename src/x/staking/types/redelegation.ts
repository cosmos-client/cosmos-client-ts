import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";
import { Int } from "../../../types/int";
import { Dec } from "../../../types";

export type Redelegation = {
  delegator_address: AccAddress;
  validator_src_address: ValAddress;
  validator_dst_address: ValAddress;
  entries: RedelegationEntry[];
};

export type RedelegationEntry = {
  creation_height: number;
  completion_time: string;
  initial_balance: Int;
  shares_dst: Dec;
};
