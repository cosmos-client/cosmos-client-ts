import { ValAddress } from "../../../types/address/val-address";
import { Description } from "./description";
import { Commission } from "./commission";
import { Int } from "../../../types/int";
import { Dec } from "../../../types";

export type Validator = {
  operator_address: ValAddress;
  consensus_pubkey: string;
  jailed: boolean;
  status: number;
  tokens: Int;
  delegator_shares: Dec;
  description: Description;
  unbonding_height: number;
  unbonding_time: string;
  commission: Commission;
  min_self_delegation: Int;
};
