import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";

export interface QueryBondsParams {
    DelegatorAddr: AccAddress
    ValidatorAddr: ValAddress
}