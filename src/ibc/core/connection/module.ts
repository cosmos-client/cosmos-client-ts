import { CosmosClient } from "../../../cosmos-client";
import { QueryApi } from "../../../generated/api";

export function clientConnections(sdk: CosmosClient, clientID: string) {
  return new QueryApi(undefined, sdk.url).clientConnections(clientID);
}

export function connections(
  sdk: CosmosClient,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).connections(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function clientState(sdk: CosmosClient, connectionID: string) {
  return new QueryApi(undefined, sdk.url).connectionClientState(connectionID);
}

export function connectionConsensusState(
  sdk: CosmosClient,
  connectionID: string,
  revisionNumber: bigint,
  revisionHeight: bigint,
) {
  return new QueryApi(undefined, sdk.url).connectionConsensusState(
    connectionID,
    revisionNumber.toString(),
    revisionHeight.toString(),
  );
}
