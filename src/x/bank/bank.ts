import { CosmosSDK } from '../..';
import { SendReq } from './types/send-req';
import { StdTx } from '../auth/types/std-tx';
import { Coin } from '../../types/cosmos-sdk/coin';
import { AccAddress } from '../../types/cosmos-sdk/address/acc-address';

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
  export function postTransfer(host: CosmosSDK, address: AccAddress, params: SendReq) {
    return host.post<StdTx>(`/bank/accounts/${address.toBech32()}/transfers`, params);
  }

  /**
   * /bank/balances/${address}
   * @param host 
   * @param address 
   */
  export function getBalance(host: CosmosSDK, address: AccAddress) {
    return host.get<Coin[]>(`/bank/balances/${address.toBech32()}`);
  }
}
