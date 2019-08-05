import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";

export interface QueryBondsParams {
    delegator_address: AccAddress
    validator_address: ValAddress
}