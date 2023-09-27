import { QueryApi } from '../../openapi/api';
import { CosmosSDK } from '../../sdk';

export function account(sdk: CosmosSDK, address: string) {
  return new QueryApi(undefined, sdk.url).account(address);
}

export function params(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).authParams();
}
