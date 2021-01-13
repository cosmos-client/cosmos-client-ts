import { CosmosClient } from "../../cosmos-client";
import { QueryApi } from "../../generated/api";

export function params(sdk: CosmosClient, subspace?: string, key?: string) {
  return new QueryApi(undefined, sdk.url).params(subspace, key);
}
