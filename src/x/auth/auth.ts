import { BroadcastReq } from "./broadcast-req";
import { BaseAccount } from "./account";
import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { TxResponse, SearchTxsResult } from "../../cosmos-sdk/result";

/**
 * Cosmos SDKにおけるx/authのRest APIをまとめたモジュール。
 */
export module Auth {
  /**
   * /auth/accounts/${address}
   * @param host 
   * @param address 
   */
  export function getAccount(host: CosmosSdkHost, address: string) {
    return host.get<BaseAccount>(`/auth/accounts/${address}`);
  }

  /**
   * /txs/${hash}
   * @param host 
   * @param hash 
   */
  export function getTransaction(host: CosmosSdkHost, hash: string) {
    return host.get<TxResponse>(`/txs/${hash}`);
  }

  /**
   * /txs
   * @param host 
   * @param params 
   */
  export function getTransactions(
    host: CosmosSdkHost,
    params: {
      tags?: string[];
      page?: number;
      limit?: number;
    }
  ) {
    return host.get<SearchTxsResult>(`/txs`, params);
  }

  /**
   * /txs
   * @param host 
   * @param broadcastReq 
   */
  export function postTransaction(host: CosmosSdkHost, broadcastReq: BroadcastReq) {
    return host.post<TxResponse>(`/txs`, broadcastReq);
  }

  /**
   * /txs/encode
   * @param host 
   */
  export function postEncodeTransaction(host: CosmosSdkHost) {
    return host.post<{}>(`/txs/encode`, {});
  }
}