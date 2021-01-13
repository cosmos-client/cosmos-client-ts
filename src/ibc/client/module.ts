import { CosmosClient } from "../../cosmos-client";
import { QueryApi } from "../../generated/api";

export function params(sdk: CosmosClient) {
  return new QueryApi(undefined, sdk.url).clientParams();
}
