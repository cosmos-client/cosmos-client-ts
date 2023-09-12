import { QueryApi } from '../../openapi/api';
import { CosmosSDK } from '../../sdk';

export function allowance(sdk: CosmosSDK, granter: string, grantee: string) {
  return new QueryApi(undefined, sdk.url).allowance(granter.toString(), grantee.toString());
}

export function allowances(
  sdk: CosmosSDK,
  grantee: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).allowances(
    grantee,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}
