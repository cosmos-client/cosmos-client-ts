import { CosmosSDK } from "../../cosmos-sdk";
import { PrivKey } from "../../tendermint";
import { StdTx } from "./types/std-tx";
import {
  AuthApi,
  TransactionsApi,
  DecodeReq,
  EncodeReq,
  BroadcastReq,
} from "../../api";
import { AccAddress } from "../../types";
import { BaseAccount } from "./types";

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

export function accountsAddressGet(sdk: CosmosSDK, address: AccAddress) {
  return sdk.parseAminoJSON<BaseAccount>(
    new AuthApi(undefined, sdk.url).authAccountsAddressGet(address.toBech32()),
  );
}

export function txsDecodePost(sdk: CosmosSDK, req: DecodeReq) {
  return sdk.parseAminoJSON<StdTx>(
    new TransactionsApi(undefined, sdk.url).txsDecodePost(req),
  );
}

export function txsEncodePost(sdk: CosmosSDK, req: EncodeReq) {
  return new TransactionsApi(undefined, sdk.url).txsEncodePost(req);
}

export function txsGet(
  sdk: CosmosSDK,
  messageAction?: string,
  messageSender?: string,
  page?: number,
  limit?: number,
  txMinHeight?: number,
  txMaxHeight?: number,
) {
  return new TransactionsApi(undefined, sdk.url).txsGet(
    messageAction,
    messageSender,
    page,
    limit,
    txMinHeight,
    txMaxHeight,
  );
}

export function txsHashGet(sdk: CosmosSDK, hash: string) {
  return new TransactionsApi(undefined, sdk.url).txsHashGet(hash);
}

export function txsPost(sdk: CosmosSDK, req: BroadcastReq) {
  return new TransactionsApi(undefined, sdk.url).txsPost(req);
}

