import { StdTx } from "../auth";
import { CosmosSDK } from "../../cosmos-sdk";
import { Amino } from "../../codec";
import { Coin, AccAddress } from "../../types";
import { MsgSend, MsgMultiSend, SendReq } from "./types";

export * from "./types";

// Register Codec
import "../auth";
Amino.RegisterCodec("cosmos-sdk/MsgSend", MsgSend, MsgSend.fromJSON);
Amino.RegisterCodec(
  "cosmos-sdk/MsgMultiSend",
  MsgMultiSend,
  MsgMultiSend.fromJSON
);

/**
 * Cosmos SDKにおけるx/bankのRest APIをまとめたモジュール。
 */
export namespace Bank {
  /**
   * /bank/accounts/${address}/transfers
   * @param sdk
   * @param address
   * @param params
   */
  export function postTransfer(
    sdk: CosmosSDK,
    address: AccAddress,
    params: SendReq
  ) {
    return sdk.post<StdTx>(
      `/bank/accounts/${address.toBech32()}/transfers`,
      params
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
}
