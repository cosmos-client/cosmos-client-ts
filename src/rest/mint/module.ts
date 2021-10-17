import { QueryApi } from '../../openapi/api';
import { CosmosSDK } from '../../sdk';

export function annualProvisions(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).annualProvisions();
}

export function inflation(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).inflation();
}

export function params(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).mintParams();
}
