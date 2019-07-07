import { StdFee, StdSignature } from "./stdtx";
import { Msg } from "../../cosmos-sdk/msg";

export interface SignedTx {
  tx: {
    msg: Msg[];
    fee: StdFee;
    signatures: StdSignature[];
    memo: string;
  }
  mode: string;
}