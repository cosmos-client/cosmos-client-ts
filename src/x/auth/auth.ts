import { BroadcastReq } from "./types/broadcast-req";
import { BaseAccount } from "./types/account";
import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { TxResponse, SearchTxsResult } from "../../types/cosmos-sdk/result";
import { StdTx } from "./types/stdtx";
import { EncodeResp } from "./types/encode-resp";

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
  export function postEncodeTransaction(host: CosmosSdkHost, tx: StdTx) {
    return host.post<EncodeResp>(`/txs/encode`, tx);
  }
}