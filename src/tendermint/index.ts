import { CosmosSDK } from "../cosmos-sdk";

/**
 * Tendermint Rest API
 */
export namespace Tendermint {
  /**
   * /tendermint/status
   * @param sdk 
   */
  export function getStatus(sdk: CosmosSDK) {
    return sdk.get<{}>(`/tendermint/status`)
  }
}