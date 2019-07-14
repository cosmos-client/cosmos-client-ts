import { CosmosSdkHost } from '../../common/cosmos-sdk-host';
import { SendReq } from './types/send-req';
import { StdTx } from '../auth/types/stdtx';
import { Coin } from '../../types/cosmos-sdk/coin';

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
    return host.post<StdTx>(`/bank/accounts/${address}/transfers`, params);
  }

  /**
   * /bank/balances/${address}
   * @param host 
   * @param address 
   */
  export function getBalance(host: CosmosSdkHost, address: string) {
    return host.get<Coin[]>(`/bank/balances/${address}`);
  }
}
