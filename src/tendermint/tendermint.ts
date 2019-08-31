import { CosmosSdkHost } from "../common/cosmos-sdk-host";

/**
 * Tendermint Rest API
 */
export module Tendermint {
  /**
   * /tendermint/status
   * @param host 
   */
  export function getStatus(host: CosmosSdkHost) {
    return host.get<{}>(`/tendermint/status`)
  }
}