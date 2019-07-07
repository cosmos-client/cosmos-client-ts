import { CosmosSdkHost } from "../..";
import { SendReq } from "./send-req";

export module Bank {
  export function postTransfer(host: CosmosSdkHost, address: string, params: SendReq) {
    return host.post<{}>(`/bank/accounts/${address}/transfers`, params);
  }

  export function getBalance(host: CosmosSdkHost, address: string) {
    return host.get<{}>(`/bank/balances/${address}`);
  }
}