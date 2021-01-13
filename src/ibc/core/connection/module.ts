import { CosmosSDK } from "../../../cosmos-sdk";
import { QueryApi } from "../../../generated/api";

export function clientConnections(sdk: CosmosSDK, clientID: string) {
  return new QueryApi(undefined, sdk.url).clientConnections(clientID);
}

export function connections(
  sdk: CosmosSDK,
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

export function clientState(sdk: CosmosSDK, connectionID: string) {
  return new QueryApi(undefined, sdk.url).connectionClientState(connectionID);
}

export function connectionConsensusState(
  sdk: CosmosSDK,
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
