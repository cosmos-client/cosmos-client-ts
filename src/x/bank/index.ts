import { CosmosSDK } from "../../cosmos-sdk";
import { Amino } from "../../common/amino";
import { SendReq } from "./types/send-req";
import { Coin } from "../../types/cosmos-sdk/coin";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";
import { MsgSend } from "./types/msg-send";
import { MsgMultiSend } from "./types/msg-multi-send";

export * from "./types";

// Register Codec
import { StdTx } from "../auth";
Amino.RegisterConcrete("cosmos-sdk/MsgSend", MsgSend);
Amino.RegisterConcrete("cosmos-sdk/MsgMultiSend", MsgMultiSend);

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
