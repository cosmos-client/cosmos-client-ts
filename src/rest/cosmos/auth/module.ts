import { CosmosSDK } from '../../../sdk';
import { QueryApi } from '../../../openapi/api';
import { AccAddress } from '../../../types';

export function account(sdk: CosmosSDK, address: AccAddress) {
  return new QueryApi(undefined, sdk.url).account(address.toString());
}

export function params(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).authParams();
}
