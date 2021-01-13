import { QueryApi } from "../../generated/api";
import { CosmosSDK } from "../../cosmos-sdk";

export function appliedPlan(sdk: CosmosSDK, name: string) {
  return new QueryApi(undefined, sdk.url).appliedPlan(name);
}

export function currentPlan(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).currentPlan();
}

export function upgradedConsensusState(sdk: CosmosSDK, lastHeight: string) {
  return new QueryApi(undefined, sdk.url).upgradedConsensusState(lastHeight);
}
