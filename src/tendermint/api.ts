import { CosmosSDK } from "../cosmos-sdk";

/**
 * /tendermint/status
 * @param sdk
 */
export function getStatus(sdk: CosmosSDK) {
  return sdk.get<{}>(`/tendermint/status`);
}
