import { ValAddress } from "../../../types/address/val-address";
import { description } from "./description";
import { Commission } from "./commission";

export type Validator = {
  operator_addr: ValAddress;
  consensus_pubkey: string;
  jailed: boolean;
  status: number;
  tokens: string;
  delegator_shares: string;
  description: description;
  bond_height: string;
  bond_intra_tx_counter: number;
  unbounding_height: string;
  unbounding_time: string;
  commission: Commission;
};
