import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";

export interface QueryRedelegationParams {
  delegator_address: AccAddress;
  src_validator_address: ValAddress;
  dst_validator_address: ValAddress;
}
