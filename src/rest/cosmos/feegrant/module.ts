import { QueryApi } from '../../../openapi/api';
import { CosmosSDK } from '../../../sdk';
import { AccAddress } from '../../../types';

export function allowance(sdk: CosmosSDK, granter: AccAddress, grantee: AccAddress) {
  return new QueryApi(undefined, sdk.url).allowance(granter.toString(), grantee.toString());
}

export function allowances(
  sdk: CosmosSDK,
  grantee: AccAddress,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).allowances(
    grantee.toString(),
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}
