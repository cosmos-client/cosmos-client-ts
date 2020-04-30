import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";
import { Dec } from "../../../types/dec";

export type Delegation = {
  delegator_address: AccAddress;
  validator_address: ValAddress;
  shares: Dec;
};
