import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";
import { RedelegationEntry } from "./redelegation-entry";

export interface Redelegation {
    delegator_address: AccAddress
    validator_src_address: ValAddress
    validator_dst_address: ValAddress
    entries: RedelegationEntry[]
}