import { Proof } from "../crypto/proof";

export interface ResponseQuery {
    code?: number;
    log?: string;
    info?: string;
    index?: bigint;
    key?: Int8Array;
    value?: Int8Array;
    proof?: Proof;
    height?: bigint;
    codespace?: string;
}