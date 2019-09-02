import { StdFee } from "./std-fee";
import { Msg } from "../../../types/cosmos-sdk/msg";

export interface StdSignMsg {
  chain_id: string;
  account_number: bigint;
  sequence: bigint;
  fee: StdFee;
  msgs: Msg[];
  memo: string;
}
