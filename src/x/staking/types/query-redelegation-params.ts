import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";

export type QueryRedelegationParams = {
  delegator_address: AccAddress;
  src_validator_address: ValAddress;
  dst_validator_address: ValAddress;
};
