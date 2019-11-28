import { BroadcastReq } from "./types/broadcast-req";
import { BaseAccount } from "./types/account";
import { CosmosSDK } from "../..";
import { TxResponse, SearchTxsResult } from "../../types/cosmos-sdk/result";
import { StdTx } from "./types/std-tx";
import { EncodeResp } from "./types/encode-resp";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";
import { Msg } from "../../types/cosmos-sdk/msg";
import { PrivKey } from "../../types/tendermint/priv-key";
import { StdFee } from "../../x/auth/types/std-fee";
import { StdSignMsg } from "../../x/auth/types/std-sign-msg";

/**
 * 
 */
export namespace Auth {

  /**
   *
   * @param accountNumber
   * @param fee
   * @param memo
   * @param msgs
   * @param sequence
   */
  export function createStdSignMsg(
    accountNumber: number,
    chainID: string,
    fee: StdFee,
    memo: string,
    msgs: Msg[],
    sequence: number
  ): StdSignMsg {
    return {
      account_number: accountNumber,
      chain_id: chainID,
      fee: fee,
      memo: memo,
      msgs: msgs,
      sequence: sequence
    };
  }

  /**
   * 
   * @param privKey 
   * @param stdTx
   * @param accountNumber 
   * @param sequence 
   */
  export function signStdTx(sdk: CosmosSDK, privKey: PrivKey, stdTx: StdTx, accountNumber: number, sequence: number) {
    const stdSignMsg = createStdSignMsg(
      accountNumber,
      sdk.chainID,
      stdTx.fee,
      stdTx.memo,
      stdTx.msg,
      sequence
    );
    const sortedJSON = JSON.stringify(stdSignMsg, (_, v) => (!(v instanceof Array || v === null) && typeof v == "object") ? Object.keys(v).sort().reduce((r: any, k) => { r[k] = v[k]; return r }, {}) : v);
    const signature = {
      signature: privKey.sign(sortedJSON).toString("base64"),
      pub_key: privKey.getPubKey()
    };

    const newStdTx = { ...stdTx };
    newStdTx.signatures = newStdTx.signatures ? [...newStdTx.signatures, signature] : [signature];

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
  export function postTransaction(
    sdk: CosmosSDK,
    broadcastReq: BroadcastReq
  ) {
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
