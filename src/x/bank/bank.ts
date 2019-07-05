import { CosmosSdkHost } from "../..";

export module Bank {
  export function postTransfer(host: CosmosSdkHost, address: string) {
    return host.post<{}>(`/bank/accounts/${address}/transfers`, {});
  }

  export function getBalance(host: CosmosSdkHost, address: string) {
    return host.get<{}>(`/bank/balances/${address}`);
  }
}