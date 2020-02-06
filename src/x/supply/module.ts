import { CosmosSDK } from "../../cosmos-sdk";
import { SupplyQuery } from "./types";

/**
 * /supply/total
 * @param supplyQuery
 */
export function getTotalSupply(sdk: CosmosSDK, supplyQuery: SupplyQuery) {
  return sdk.get<{}>("/supply/total", supplyQuery);
}

/**
 * /supply/total/{denom}
 * @param supplyQuery
 * @param denom
 */

export function getSupplyOf(
  sdk: CosmosSDK,
  denom: string,
  supplyQuery: SupplyQuery,
) {
  return sdk.get<{}>(`/supply/total/${denom}`, supplyQuery);
}
