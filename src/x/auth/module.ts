import { CosmosSDK } from "../../cosmos-sdk";
import { PrivKey } from "../../tendermint";
import { StdTx } from "./types/std-tx";
import { AuthApi, TransactionsApi, DecodeReq, EncodeReq } from "../../api";
import { AccAddress } from "../../types";
import { BaseAccount, StdSignature } from "./types";
import { codec } from "../../codec";
import { AxiosPromise } from "axios";

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
  accountNumber: string,
  sequence: string,
) {
  const signBytes = stdTx.getSignBytes(sdk.chainID, accountNumber, sequence);
  const signature: StdSignature = {
    pub_key: privKey.getPubKey(),
    signature: privKey.sign(signBytes).toString("base64"),
  };

  const newStdTx = new StdTx(
    stdTx.msg,
    stdTx.fee,
    stdTx.signatures ? [...stdTx.signatures, signature] : [signature],
    stdTx.memo,
  );

  return newStdTx;
}

export function accountsAddressGet(sdk: CosmosSDK, address: AccAddress) {
  return sdk
    .wrapResponseWithHeight(
      new AuthApi(undefined, sdk.url).authAccountsAddressGet(
        address.toBech32(),
      ),
    )
    .then((res) => {
      res.data.result = codec.fromJSONString(JSON.stringify(res.data.result));
      return res;
    }) as AxiosPromise<{ height: number; result: BaseAccount }>;
}

export function txsDecodePost(sdk: CosmosSDK, req: DecodeReq) {
  return new TransactionsApi(undefined, sdk.url)
    .txsDecodePost(req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function txsEncodePost(sdk: CosmosSDK, req: EncodeReq) {
  return new TransactionsApi(undefined, sdk.url)
    .txsEncodePost(req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
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
    tx: JSON.parse(codec.toJSONString(tx)).value,
    mode: mode,
  });
}
