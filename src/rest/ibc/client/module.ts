import { CosmosSDK } from '../../../sdk';
import { QueryApi } from '../../../openapi/api';

export function params(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).clientParams();
}
