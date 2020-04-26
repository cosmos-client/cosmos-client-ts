import { CosmosSDK } from "../../cosmos-sdk";
import { TxResponse, SearchTxsResult, AccAddress } from "../../types";
import { PrivKey } from "../../tendermint";
import { BroadcastReq } from "./types/broadcast-req";
import { BaseAccount } from "./types/account";
import { StdTx } from "./types/std-tx";
import { EncodeResp } from "./types/encode-resp";
import { DecodeReq } from "./types";

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
  sequence: number,
) {
  const signBytes = stdTx.getSignBytes(sdk.chainID, accountNumber, sequence);
  const signature = {
    signature: privKey.sign(signBytes).toString("base64"),
    pub_key: privKey.getPubKey(),
  };

  const newStdTx = new StdTx(
    stdTx.msg,
    stdTx.fee,
    stdTx.signatures,
    stdTx.memo,
  );
  newStdTx.signatures.push(signature);

  return newStdTx;
}

/**
 * `/auth/accounts/{address}`
 * @param sdk
 * @param address
 */
export function queryAccount(sdk: CosmosSDK, address: AccAddress) {
  return sdk.get<BaseAccount>(`/auth/accounts/${address.toBech32()}`);
}

/**
 * `/txs/{hash}`
 * @param sdk
 * @param hash
 */
export function queryTx(sdk: CosmosSDK, hash: string) {
  return sdk.get<TxResponse>(`/txs/${hash}`);
}

/**
 * `/txs`
 * @param sdk
 * @param params
 */
export function queryTxs(
  sdk: CosmosSDK,
  params: {
    "message.action"?: string;
    "message.sender"?: string;
    page?: number;
    limit?: number;
  },
) {
  return sdk.get<SearchTxsResult>(`/txs`, params);
}

/**
 * `/txs`
 * @param sdk
 * @param broadcastReq
 */
export function broadcast(sdk: CosmosSDK, broadcastReq: BroadcastReq) {
  return sdk.post<TxResponse>(`/txs`, broadcastReq);
}

/**
 * `/txs/encode`
 * @param sdk
 */
export function encode(sdk: CosmosSDK, tx: StdTx) {
  return sdk.post<EncodeResp>(`/txs/encode`, tx);
}

/**
 * `/txs/decode`
 * @param sdk
 */
export function decode(sdk: CosmosSDK, req: DecodeReq) {
  return sdk.post<StdTx>(`/txs/decode`, req);
}
