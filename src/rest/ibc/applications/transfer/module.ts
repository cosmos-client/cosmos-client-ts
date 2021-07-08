import { CosmosSDK } from '../../../../sdk';
import { QueryApi } from '../../../../openapi/api';

export function denomTraces(
  sdk: CosmosSDK,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).d.denomTraces(
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
