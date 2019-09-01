import { BroadcastReq } from "./types/broadcast-req";
import { BaseAccount } from "./types/account";
import { CosmosSDK } from "../..";
import { TxResponse, SearchTxsResult } from "../../types/cosmos-sdk/result";
import { StdTx } from "./types/std-tx";
import { EncodeResp } from "./types/encode-resp";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";

/**
 * 
 */
export module Auth {
  /**
   * /auth/accounts/${address}
   * @param host
   * @param address
   */
  export function getAccount(host: CosmosSDK, address: AccAddress) {
    return host.get<BaseAccount>(`/auth/accounts/${address.toBech32()}`);
  }

  /**
   * /txs/${hash}
   * @param host
   * @param hash
   */
  export function getTransaction(host: CosmosSDK, hash: string) {
    return host.get<TxResponse>(`/txs/${hash}`);
  }

  /**
   * /txs
   * @param host
   * @param params
   */
  export function getTransactions(
    host: CosmosSDK,
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
  export function postTransaction(
    host: CosmosSDK,
    broadcastReq: BroadcastReq
  ) {
    return host.post<TxResponse>(`/txs`, broadcastReq);
  }

  /**
   * /txs/encode
   * @param host
   */
  export function postEncodeTransaction(host: CosmosSDK, tx: StdTx) {
    return host.post<EncodeResp>(`/txs/encode`, tx);
  }
}
