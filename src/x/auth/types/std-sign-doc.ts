import { StdFee } from "./std-fee";
import { Msg } from "../../../types/cosmos-sdk/msg";

export interface StdSignDoc {
  account_number: bigint;
  chain_id: string;
  fee: StdFee;
  memo: string;
  msgs: Msg[];
  sequence: bigint;
}
