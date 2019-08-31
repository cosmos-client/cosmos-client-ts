import { BroadcastReq } from "./types/broadcast-req";
import { BaseAccount } from "./types/account";
import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { TxResponse, SearchTxsResult } from "../../types/cosmos-sdk/result";
import { StdTx } from "./types/stdtx";
import { EncodeResp } from "./types/encode-resp";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";

/**
 * Cosmos SDKにおけるx/authのRest APIをまとめたモジュール。
 */
export module Auth {
  /**
   * /auth/accounts/${address}
   * @param host 
   * @param address 
   */
  export function getAccount(host: CosmosSdkHost, address: AccAddress) {
    return host.get<BaseAccount>(`/auth/accounts/${address.toBech32()}`);
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
  export function postTransaction<Msg>(host: CosmosSdkHost, broadcastReq: BroadcastReq<Msg>) {
    return host.post<TxResponse>(`/txs`, broadcastReq);
  }

  /**
   * /txs/encode
   * @param host 
   */
  export function postEncodeTransaction<Msg>(host: CosmosSdkHost, tx: StdTx<Msg>) {
    return host.post<EncodeResp>(`/txs/encode`, tx);
  }
}