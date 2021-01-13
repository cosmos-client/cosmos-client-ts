import { QueryApi } from "../../generated/api";
import { CosmosClient } from "../../cosmos-sdk";

export function appliedPlan(sdk: CosmosClient, name: string) {
  return new QueryApi(undefined, sdk.url).appliedPlan(name);
}

export function currentPlan(sdk: CosmosClient) {
  return new QueryApi(undefined, sdk.url).currentPlan();
}

export function upgradedConsensusState(sdk: CosmosClient, lastHeight: string) {
  return new QueryApi(undefined, sdk.url).upgradedConsensusState(lastHeight);
}
