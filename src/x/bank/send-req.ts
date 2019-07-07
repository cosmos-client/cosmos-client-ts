import { BaseReq } from "../../cosmos-sdk/rest";
import { Coin } from "../../cosmos-sdk/coin/coin";

export interface SendReq {
  base_req: BaseReq;
  amount: Coin[];
}