import { CosmosSDK } from "../../cosmos-sdk";
import { QueryApi } from "../../api";
import { AccountI } from "./types";

export function account(sdk: CosmosSDK, address: string) {
  return new QueryApi(undefined, sdk.url)
    .account(address)
    .then((res) => sdk.reparseAxiosResponse<AccountI>(res));
}

export function authParams(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).authParams();
}
