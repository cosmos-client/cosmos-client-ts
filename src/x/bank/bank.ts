import { CosmosSdkHost } from "../..";
import { BaseReq } from "../../cosmos-sdk/rest";
import { Coin } from "../../cosmos-sdk/coin/coin";

export module Bank {
  export function postTransfer(host: CosmosSdkHost, address: string, params: SendReq) {
    return host.post<{}>(`/bank/accounts/${address}/transfers`, params);
  }

  export function getBalance(host: CosmosSdkHost, address: string) {
    return host.get<{}>(`/bank/balances/${address}`);
  }

  export interface SendReq {
    base_req: BaseReq;
    amount: Coin[];
  }
}