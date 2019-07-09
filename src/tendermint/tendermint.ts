import { CosmosSdkHost } from "../common/cosmos-sdk-host";

export module Tendermint {
  /**
   * 
   * @param host 
   */
  export function getStatus(host: CosmosSdkHost) {
    return host.get<{}>(`/tendermint/status`)
  }
}