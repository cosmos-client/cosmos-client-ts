import { StdTx } from "../../auth/types/stdtx";
import { result } from "./result";

export interface TxQuery<Msg> {
    hash: string;
    height: number;
    tx: StdTx<Msg>;
    result: result;
}