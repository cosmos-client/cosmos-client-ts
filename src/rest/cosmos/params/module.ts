import { CosmosSDK } from '../../../sdk';
import { QueryApi } from '../../../openapi/api';

export function params(sdk: CosmosSDK, subspace?: string, key?: string) {
  return new QueryApi(undefined, sdk.url).params(subspace, key);
}
