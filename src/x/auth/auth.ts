import { CosmosSdkHost } from "../..";
import { Account } from "../../cosmos-sdk/account";
import { SignedTx } from "./signed-tx";

export module Auth {
  export function getAccount(host: CosmosSdkHost, address: string) {
    return host.get<Account>(`/auth/accounts/${address}`)
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

  export function postTransaction(host: CosmosSdkHost, signedTx: SignedTx) {
    return host.post<{}>(`/txs`, signedTx);
  }

  export function postEncodeTransaction(host: CosmosSdkHost) {
    return host.post<{}>(`/txs/encode`, {});
  }
}