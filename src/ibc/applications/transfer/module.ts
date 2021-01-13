import { CosmosClient } from "../../../cosmos-client";
import { QueryApi } from "../../../generated/api";

export function denomTraces(
  sdk: CosmosClient,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).denomTraces(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function denomTrace(sdk: CosmosClient, hash: string) {
  return new QueryApi(undefined, sdk.url).denomTrace(hash);
}

export function params(sdk: CosmosClient) {
  return new QueryApi(undefined, sdk.url).iBCTransferParams();
}
