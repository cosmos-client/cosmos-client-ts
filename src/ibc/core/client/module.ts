import { CosmosClient } from "../../../cosmos-client";
import { QueryApi } from "../../../openapi/api";

export function clientStates(
  sdk: CosmosClient,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).clientStates(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function clientState(sdk: CosmosClient, clientID: string) {
  return new QueryApi(undefined, sdk.url).clientState(clientID);
}

export function consensusStates(sdk: CosmosClient, clientID: string) {
  return new QueryApi(undefined, sdk.url).consensusStates(clientID);
}

export function consensusState(
  sdk: CosmosClient,
  clientID: string,
  revisionNumber: bigint,
  revisionHeight: bigint,
  latestHeight?: boolean,
) {
  return new QueryApi(undefined, sdk.url).consensusState(
    clientID,
    revisionNumber.toString(),
    revisionHeight.toString(),
    latestHeight,
  );
}
