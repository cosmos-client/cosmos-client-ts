import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { UnboundingDelegationEntry } from "./unbounding-delegation-entry";

export interface UnbondingDelegation {
    delegator_address: AccAddress
    validator_address: ValAddress
    entries: UnboundingDelegationEntry[]

}