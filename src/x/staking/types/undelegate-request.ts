import { BaseReq } from "../../../types/rest";
import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";
import { Coin } from "../../../types/coin";

export type UndelegateRequest = {
  base_req: BaseReq;
  delegator_address: AccAddress;
  validator_address: ValAddress;
  amount: Coin;
}
