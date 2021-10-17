import { QueryApi } from '../../../openapi/api';
import { CosmosSDK } from '../../../sdk';
import { AccAddress } from '../../../types';

export function grants(
  sdk: CosmosSDK,
  granter: AccAddress,
  grantee: AccAddress,
  msgTypeUrl?: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).grants(
    granter.toString(),
    grantee.toString(),
    msgTypeUrl,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}
