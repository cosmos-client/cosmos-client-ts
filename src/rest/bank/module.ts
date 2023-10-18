import { QueryApi } from '../../openapi/api';
import { CosmosSDK } from '../../sdk';

export function allBalances(
  sdk: CosmosSDK,
  address: string,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).allBalances(
    address,
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function balance(sdk: CosmosSDK, address: string, denom: string) {
  return new QueryApi(undefined, sdk.url).balance(address, denom);
}

export function params(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).bankParams();
}

export function supplyOf(sdk: CosmosSDK, denom: string) {
  return new QueryApi(undefined, sdk.url).supplyOf(denom);
}

export function totalSupply(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).totalSupply();
}

export function denomOwners(sdk: CosmosSDK,denom: string) {
  return new QueryApi(undefined, sdk.url).denomOwners(denom);
}

export function denomMetadata(sdk: CosmosSDK,denom: string) {
  return new QueryApi(undefined, sdk.url).denomMetadata(denom);
}

export function denomsMetadata(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).denomsMetadata();
}
