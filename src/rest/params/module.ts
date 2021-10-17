import { QueryApi } from '../../openapi/api';
import { CosmosSDK } from '../../sdk';

export function params(sdk: CosmosSDK, subspace?: string, key?: string) {
  return new QueryApi(undefined, sdk.url).params(subspace, key);
}
