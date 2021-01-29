import { CosmosClient } from "../../cosmos-client";
import { QueryApi } from "../../generated/api";
import { AccAddress } from "../types";
import { AnyOrMessage } from "../../codec/any";

export function account(sdk: CosmosClient, address: AccAddress) {
  return new QueryApi(undefined, sdk.url)
    .account(address.toString())
    .then((res) => sdk.reparseAxiosResponse<{ account: AnyOrMessage }>(res));
}

export function params(sdk: CosmosClient) {
  return new QueryApi(undefined, sdk.url).authParams();
}
