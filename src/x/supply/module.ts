import { CosmosSDK } from "../../cosmos-sdk";
import { Coin } from "../../types";

/**
 * `/supply/total`
 * @param supplyQuery
 */
export function getTotalSupply(sdk: CosmosSDK) {
  return sdk.get<Coin[]>("/supply/total");
}

/**
 * `/supply/total/{denom}`
 * @param supplyQuery
 * @param denom
 */

export function getSupplyOf(sdk: CosmosSDK, denom: string) {
  return sdk.get<Coin>(`/supply/total/${denom}`);
}
