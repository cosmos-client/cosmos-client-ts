import { BroadcastReq } from "./types/broadcast-req";
import { BaseAccount } from "./types/account";
import { CosmosSDK } from "../..";
import { TxResponse, SearchTxsResult } from "../../types/cosmos-sdk/result";
import { StdTx } from "./types/std-tx";
import { EncodeResp } from "./types/encode-resp";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";
import { PrivKey } from "../../types/tendermint/priv-key";
import { Amino } from "../../common/amino";

export * from "./types";

/**
 *
 */
export namespace Auth {
  /**
   * Register codec
   */
  export function init() {
    Amino.RegisterConcrete('cosmos-sdk/Account', BaseAccount);
    Amino.RegisterConcrete('cosmos-sdk/StdTx', StdTx);
  }

  /**
   *
   * @param privKey
   * @param stdTx
   * @param accountNumber
   * @param sequence
   */
  export function signStdTx(
    sdk: CosmosSDK,
    privKey: PrivKey,
    stdTx: StdTx,
    accountNumber: number,
    sequence: number
  ) {
    const signBytes = stdTx.getSignBytes(sdk.chainID, accountNumber, sequence)
    const signature = {
      signature: privKey.sign(signBytes).toString("base64"),
      pub_key: privKey.getPubKey()
    };

    const newStdTx = { ...stdTx };
    newStdTx.signatures = newStdTx.signatures
      ? [...newStdTx.signatures, signature]
      : [signature];

    return newStdTx;
  }

  /**
   * /auth/accounts/${address}
   * @param sdk
   * @param address
   */
  export function getAccount(sdk: CosmosSDK, address: AccAddress) {
    return sdk.get<BaseAccount>(`/auth/accounts/${address.toBech32()}`);
  }

  /**
   * /txs/${hash}
   * @param sdk
   * @param hash
   */
  export function getTransaction(sdk: CosmosSDK, hash: string) {
    return sdk.get<TxResponse>(`/txs/${hash}`);
  }

  /**
   * /txs
   * @param sdk
   * @param params
   */
  export function getTransactions(
    sdk: CosmosSDK,
    params: {
      tags?: string[];
      page?: number;
      limit?: number;
    }
  ) {
    return sdk.get<SearchTxsResult>(`/txs`, params);
  }

  /**
   * /txs
   * @param sdk
   * @param broadcastReq
   */
  export function postTransaction(sdk: CosmosSDK, broadcastReq: BroadcastReq) {
    return sdk.post<TxResponse>(`/txs`, broadcastReq);
  }

  /**
   * /txs/encode
   * @param sdk
   */
  export function postEncodeTransaction(sdk: CosmosSDK, tx: StdTx) {
    return sdk.post<EncodeResp>(`/txs/encode`, tx);
  }
}

