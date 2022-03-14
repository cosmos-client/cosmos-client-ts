import { QueryApi } from '../../openapi/api';
import { CosmosSDK } from '../../sdk';
import { AccAddress } from '../../types';

export function allBalances(
  sdk: CosmosSDK,
  address: AccAddress,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).allBalances(
    address.toString(),
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function balance(sdk: CosmosSDK, address: AccAddress, denom: string) {
  return new QueryApi(undefined, sdk.url).balance(address.toString(), denom);
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
