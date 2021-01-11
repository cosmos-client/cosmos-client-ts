import { CosmosSDK } from "../../cosmos-sdk";
import { QueryApi } from "../../api";

export function balance(sdk: CosmosSDK, subspace?: string, key?: string) {
  return new QueryApi(undefined, sdk.url).params(subspace, key);
}
