import { CosmosClient } from '../../cosmos-client';
import { QueryApi } from '../../openapi/api';
import { AccAddress } from '../types';

export function account(sdk: CosmosClient, address: AccAddress) {
  return new QueryApi(undefined, sdk.url).account(address.toString());
}

export function params(sdk: CosmosClient) {
  return new QueryApi(undefined, sdk.url).authParams();
}
