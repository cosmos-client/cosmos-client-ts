import { CosmosSDK } from '../../../sdk';
import { QueryApi } from '../../../openapi/api';
import { AccAddress } from '../../../types';

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
