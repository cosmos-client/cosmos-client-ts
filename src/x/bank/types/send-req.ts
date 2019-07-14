import { BaseReq } from "../../../types/cosmos-sdk/rest";
import { Coin } from "../../../types/cosmos-sdk/coin";

export interface SendReq {
  base_req: BaseReq;
  amount: Coin[];
}