import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";

export type QueryBondsParams = {
  delegator_address: AccAddress;
  validator_address: ValAddress;
}
