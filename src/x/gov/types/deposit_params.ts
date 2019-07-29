import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";

export interface Deposit{
    proposal_id: Int32Array
    depositer: AccAddress
}