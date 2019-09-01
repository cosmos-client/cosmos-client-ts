import { CosmosSDK } from "../..";
import { SupplyQuery } from "./types/supply-query";

export module Supply {
  /**
   * /supply/total
   * @param supplyQuery
   */

  export function getTotalSupply(host: CosmosSDK, supplyQuery: SupplyQuery) {
    return host.get<{}>("/supply/total", supplyQuery);
  }

  /**
   * /supply/total/{denom}
   * @param supplyQuery
   * @param denom
   */

  export function getSupplyOf(
    host: CosmosSDK,
    denom: string,
    supplyQuery: SupplyQuery
  ) {
    return host.get<{}>("/supply/total/${denom}", supplyQuery);
  }
}
