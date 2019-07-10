import { CosmosSdkHost } from "../..";
import { SendReq } from "./send-req";

/**
 * Cosmos SDKにおけるx/bankのRest APIをまとめたモジュール。
 */
export module Bank {
  /**
   * /bank/accounts/${address}/transfers
   * @param host 
   * @param address 
   * @param params 
   */
  export function postTransfer(host: CosmosSdkHost, address: string, params: SendReq) {
    return host.post<{}>(`/bank/accounts/${address}/transfers`, params);
  }

  /**
   * /bank/balances/${address}
   * @param host 
   * @param address 
   */
  export function getBalance(host: CosmosSdkHost, address: string) {
    return host.get<{}>(`/bank/balances/${address}`);
  }
}