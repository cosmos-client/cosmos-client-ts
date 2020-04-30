import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";
import { Int } from "../../../types/int";

export type UnbondingDelegation = {
  deligator_address: AccAddress;
  validator_address: ValAddress;
  entries: UnbondingDelegationEntry[];
};

export type UnbondingDelegationEntry = {
  creation_height: number;
  completion_time: string;
  initial_balance: Int;
  balance: Int;
};
