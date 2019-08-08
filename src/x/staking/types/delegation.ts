import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";

export interface Delegation {
    del_addr: AccAddress;
    val_addr: ValAddress;
    shares: string;
    height: number;
}