import { BaseReq } from "../../../types/cosmos-sdk/rest";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";
import { Coin } from "../../../types/cosmos-sdk/coin";

export interface UndelegateRequest {
  base_req: BaseReq;
  delegator_address: AccAddress;
  validator_address: ValAddress;
  amount: Coin;
}
