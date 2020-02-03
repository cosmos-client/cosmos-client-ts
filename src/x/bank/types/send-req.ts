import { BaseReq } from "../../../types/rest";
import { Coin } from "../../../types/coin";

export interface SendReq {
  base_req: BaseReq;
  amount: Coin[];
}