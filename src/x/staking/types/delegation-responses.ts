import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";
import { Dec } from "../../../types/cosmos-sdk/decimal";

export interface Delegation{
    delegator_address : AccAddress
    validator_address: ValAddress
    shares: Dec
    balance: Int16Array
}