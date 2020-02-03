import { BaseReq } from "../../../types/rest";
import { AccAddress } from "../../../types/address/acc-address";
import { ValAddress } from "../../../types/address/val-address";
import { Coin } from "../../../types/coin";

export interface RedelegateRequest {
  base_req: BaseReq;
  delegator_address: AccAddress;
  validator_src_address: ValAddress;
  validator_dst_address: ValAddress;
  amount: Coin;
}
