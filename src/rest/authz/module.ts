import { QueryApi } from '../../openapi/api';
import { CosmosSDK } from '../../sdk';

export function grants(
  sdk: CosmosSDK,
  granter: string,
  grantee: string,
  msgTypeUrl?: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).grants(
    granter,
    grantee,
    msgTypeUrl,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}
