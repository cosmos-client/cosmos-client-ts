import { CosmosSDK } from "..";

/**
 * Tendermint Rest API
 */
export module Tendermint {
  /**
   * /tendermint/status
   * @param host 
   */
  export function getStatus(host: CosmosSDK) {
    return host.get<{}>(`/tendermint/status`)
  }
}