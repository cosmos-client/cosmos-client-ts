import { CosmosSDK } from "../..";
import { SendReq } from "./types/send-req";
import { StdTx } from "../auth/types/std-tx";
import { Coin } from "../../types/cosmos-sdk/coin";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";
import { Amino } from "../../common/amino";
import { MsgSend } from "./types/msg-send";
import { MsgMultiSend } from "./types/msg-multi-send";

export * from "./types";

/**
 * Cosmos SDKにおけるx/bankのRest APIをまとめたモジュール。
 */
export namespace Bank {
  /**
   * Register codec
   */
  export function init() {
    Amino.RegisterConcrete('cosmos-sdk/MsgSend', MsgSend);
    Amino.RegisterConcrete('cosmos-sdk/MsgMultiSend', MsgMultiSend);
  }

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
