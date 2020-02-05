import { StdFee } from "./std-fee";
import { Msg } from "../../../types/msg";

export type StdSignMsg = {
  chain_id: string;
  account_number: number;
  sequence: number;
  fee: StdFee;
  msgs: Msg[];
  memo: string;
}
