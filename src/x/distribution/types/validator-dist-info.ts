import { AccAddress } from "../../../types/address/acc-address";
import { DecCoin } from "../../../types/deccoin";
import { ValidatorAccumulatedCommission } from "./validator-accumulated-commission";

export type ValidatorDistInfo = {
  operator_address: AccAddress;
  self_bond_rewards: DecCoin[];
  val_commission: ValidatorAccumulatedCommission;
}
