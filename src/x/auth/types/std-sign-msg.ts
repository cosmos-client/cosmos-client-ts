import { Msg } from "../../../types/msg";
import { StdTxFee } from "../../../api";

export type StdSignMsg = {
  chain_id: string;
  account_number: number;
  sequence: number;
  fee: StdTxFee;
  msgs: Msg[];
  memo: string;
};
