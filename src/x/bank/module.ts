import { StdTx } from "../auth";
import { CosmosSDK } from "../../cosmos-sdk";
import { Coin, AccAddress } from "../../types";
import { SendReq } from "./types";

/**
 * /bank/accounts/${address}/transfers
 * @param sdk
 * @param address
 * @param params
 */
export function postTransfer(
  sdk: CosmosSDK,
  address: AccAddress,
  params: SendReq,
) {
  return sdk.post<StdTx>(
    `/bank/accounts/${address.toBech32()}/transfers`,
    params,
  );
}

/**
 * /bank/balances/${address}
 * @param sdk
 * @param address
 */
export function getBalance(sdk: CosmosSDK, address: AccAddress) {
  return sdk.get<Coin[]>(`/bank/balances/${address.toBech32()}`);
}
