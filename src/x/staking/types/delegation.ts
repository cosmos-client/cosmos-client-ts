import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";

export interface Delegation {
    delegator_addr: AccAddress;
    validator_addr: ValAddress;
    shares: string;
    height: number;
}