import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { DecCoin } from "../../../types/cosmos-sdk/deccoin";
import { ValidatorAccumulatedCommission } from "./validator-accumulated-commission";

export interface ValidatorDistInfo {
  operator_address: AccAddress;
  self_bond_rewards: DecCoin[];
  val_commission: ValidatorAccumulatedCommission;
}
