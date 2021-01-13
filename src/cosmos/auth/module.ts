import { CosmosSDK } from "../../cosmos-sdk";
import { QueryApi } from "../../generated/api";
import { AccountI } from "./types";
import { AccAddress } from "../types";

export function account(sdk: CosmosSDK, address: AccAddress) {
  return new QueryApi(undefined, sdk.url)
    .account(address.toBech32())
    .then((res) => sdk.reparseAxiosResponse<AccountI>(res));
}

export function params(sdk: CosmosSDK) {
  return new QueryApi(undefined, sdk.url).authParams();
}
