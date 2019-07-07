import { CosmosSdkHost } from "../..";
import { BroadcastReq } from "./broadcast-req";
import { BaseAccount } from "./account";

export module Auth {
  export function getAccount(host: CosmosSdkHost, address: string) {
    return host.get<BaseAccount>(`/auth/accounts/${address}`)
  }

  export function getTransaction(host: CosmosSdkHost, hash: string) {
    return host.get<{}>(`/txs/${hash}`)
  }

  export function getTransactions(
    host: CosmosSdkHost,
    params: {
      tags?: string[];
      page?: number;
      limit?: number;
    }
  ) {
    return host.get<{}>(`/txs`, params)
  }

  export function postTransaction(host: CosmosSdkHost, broadcastReq: BroadcastReq) {
    return host.post<{}>(`/txs`, broadcastReq);
  }

  export function postEncodeTransaction(host: CosmosSdkHost) {
    return host.post<{}>(`/txs/encode`, {});
  }
}