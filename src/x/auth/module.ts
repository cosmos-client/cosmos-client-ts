import { CosmosSDK } from "../../cosmos-sdk";
import { PrivKey } from "../../tendermint";
import { StdTx } from "./types/std-tx";
import { AuthApi, TransactionsApi, DecodeReq, EncodeReq } from "../../api";
import { AccAddress } from "../../types";
import { BaseAccount, StdSignature } from "./types";

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
  const signature: StdSignature = {
    pub_key: privKey.getPubKey(),
    signature: privKey.sign(signBytes).toString("base64"),
  };

  const newStdTx = new StdTx(
    stdTx.msg,
    stdTx.fee,
    [...stdTx.signatures, signature],
    stdTx.memo,
  );

  return newStdTx;
}

export function accountsAddressGet(sdk: CosmosSDK, address: AccAddress) {
  return sdk.instancifyObjectWithoutAminoJSON<BaseAccount>(
    BaseAccount,
    new AuthApi(undefined, sdk.url).authAccountsAddressGet(address.toBech32()),
  );
}

export function txsDecodePost(sdk: CosmosSDK, req: DecodeReq) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
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

export function txsPost(
  sdk: CosmosSDK,
  tx: StdTx,
  mode: "sync" | "async" | "block",
) {
  return new TransactionsApi(undefined, sdk.url).txsPost({
    tx: sdk.objectifyInstanceWithoutAminoJSON(tx),
    mode: mode,
  });
}
