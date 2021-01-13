import { CosmosClient } from "../../cosmos-sdk";
import { QueryApi } from "../../generated/api";

export function params(sdk: CosmosClient) {
  return new QueryApi(undefined, sdk.url).clientParams();
}
