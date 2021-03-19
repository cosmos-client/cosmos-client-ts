import { CosmosClient } from '../../cosmos-client';
import { QueryApi } from '../../openapi/api';

export function params(sdk: CosmosClient) {
  return new QueryApi(undefined, sdk.url).clientParams();
}
