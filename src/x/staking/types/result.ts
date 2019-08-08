import { KVPair } from "./kvpair";

export interface result {
    log: string;
    gas_wanted: string;
    gas_used: string;
    tags: KVPair;
}