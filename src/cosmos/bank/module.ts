import { CosmosClient } from "../../cosmos-client";
import { QueryApi } from "../../generated/api";
import { AccAddress } from "../types";

export function allBalances(
  sdk: CosmosClient,
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

export function balance(sdk: CosmosClient, address: AccAddress, denom: string) {
  return new QueryApi(undefined, sdk.url).balance(address.toString(), denom);
}

export function params(sdk: CosmosClient) {
  return new QueryApi(undefined, sdk.url).bankParams();
}

export function supplyOf(sdk: CosmosClient, denom: string) {
  return new QueryApi(undefined, sdk.url).supplyOf(denom);
}

export function totalSupply(sdk: CosmosClient) {
  return new QueryApi(undefined, sdk.url).totalSupply();
}
