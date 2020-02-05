import { BaseReq } from "../../../types/rest";
import { Coin } from "../../../types/coin";

export type SendReq = {
  base_req: BaseReq;
  amount: Coin[];
}