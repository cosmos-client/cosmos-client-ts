import { CosmosSDK } from '../../../../sdk';
import { QueryApi } from '../../../../openapi/api';

export function clientStates(
  sdk: CosmosSDK,
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

export function clientState(sdk: CosmosSDK, clientID: string) {
  return new QueryApi(undefined, sdk.url).clientState(clientID);
}

export function consensusStates(sdk: CosmosSDK, clientID: string) {
  return new QueryApi(undefined, sdk.url).consensusStates(clientID);
}

export function consensusState(sdk: CosmosSDK, clientID: string, revisionNumber: bigint, revisionHeight: bigint, latestHeight?: boolean) {
  return new QueryApi(undefined, sdk.url).consensusState(clientID, revisionNumber.toString(), revisionHeight.toString(), latestHeight);
}
