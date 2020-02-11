import { BaseReq, AccAddress, Coin } from "../../../types";

export type DepositReq = {
  base_req: BaseReq;
  depositor: AccAddress;
  amount: Coin[];
};
