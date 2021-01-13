import { CosmosSDK } from "../../../cosmos-sdk";
import { QueryApi } from "../../../generated/api";

export function denomTraces(
  sdk: CosmosSDK,
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

export function denomTrace(sdk: CosmosSDK, hash: string) {
  return new QueryApi(undefined, sdk.url).denomTrace(hash);
}

export function params(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).iBCTransferParams();
}
