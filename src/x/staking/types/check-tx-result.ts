import { tags } from "./tags";

export interface CheckTxResult {
    code: number;
    data: string;
    gas_used: number;
    gas_wanted: number;
    info: string;
    log: string;
    tag: tags;
}