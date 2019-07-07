import { CosmosSdkHost } from "../common/cosmos-sdk-host";

export module Tendermint {
  export function getStatus(host: CosmosSdkHost) {
    return host.get<{}>(`/tendermint/status`)
  }
}