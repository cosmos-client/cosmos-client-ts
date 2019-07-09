import { CosmosSdkHost } from "../..";
import { SendReq } from "./send-req";

export module Bank {
  /**
   * 
   * @param host 
   * @param address 
   * @param params 
   */
  export function postTransfer(host: CosmosSdkHost, address: string, params: SendReq) {
    return host.post<{}>(`/bank/accounts/${address}/transfers`, params);
  }

  /**
   * 
   * @param host 
   * @param address 
   */
  export function getBalance(host: CosmosSdkHost, address: string) {
    return host.get<{}>(`/bank/balances/${address}`);
  }
}