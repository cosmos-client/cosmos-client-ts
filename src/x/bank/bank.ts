import { CosmosSdkHost } from '../../common/cosmos-sdk-host';
import { SendReq } from './send-req';
import { Coin } from '../../cosmos-sdk/coin/coin';

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
    return host.get<Coin>(`/bank/balances/${address}`);
  }
}
