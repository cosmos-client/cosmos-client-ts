import { StdTx } from "../auth";
import { CosmosSDK } from "../../cosmos-sdk";
import { Coin, AccAddress } from "../../types";
import { SendReq } from "./types";

/**
 * `/bank/accounts/{address}/transfers`
 * @param sdk
 * @param address
 * @param req
 */
export function send(sdk: CosmosSDK, address: AccAddress, req: SendReq) {
  return sdk.post<StdTx>(`/bank/accounts/${address.toBech32()}/transfers`, req);
}

/**
 * `/bank/balances/{address}`
 * @param sdk
 * @param address
 */
export function queryBalances(sdk: CosmosSDK, address: AccAddress) {
  return sdk.get<Coin[]>(`/bank/balances/${address.toBech32()}`);
}
