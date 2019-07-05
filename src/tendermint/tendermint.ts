import { CosmosSdkHost } from "..";

export module Tendermint {
  export function getStatus(host: CosmosSdkHost, address: string) {
    return host.get<{}>(`/tendermint/status`)
  }
}