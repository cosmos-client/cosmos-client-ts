import { QueryApi } from "../../api";
import { CosmosSDK } from "../../cosmos-sdk";

export function annualProvisions(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).annualProvisions();
}

export function inflation(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).inflation();
}

export function params(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).mintParams();
}
