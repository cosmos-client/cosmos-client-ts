import { Redelegation } from "./Redelegation";
import { RedelegationEntryResponse } from "./redelegation-entry-response";

export interface RedelegationResponse {
    redelegation: Redelegation
    entry: RedelegationEntryResponse[]
}