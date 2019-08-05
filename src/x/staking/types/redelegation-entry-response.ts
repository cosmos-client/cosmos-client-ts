import { RedelegationEntry } from "./redelegation-entry";

export interface RedelegationEntryResponse {
    redelegation_entry: RedelegationEntry
    balance: Int16Array
}