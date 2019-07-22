import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";
import { Dec } from "../../../types/cosmos-sdk/decimal";

export interface Delegation{
    DelegatorAddress : AccAddress
    ValidatorAdress: ValAddress
    Shares: Dec
    Balance: Int16Array
}