import { codec } from "./codec";
import { AxiosPromise, AxiosResponse } from "axios";
import * as bip32 from "bip32";
import * as bip39 from "bip39";
import { proto } from ".";
import { PrivKey } from "./cosmos/crypto";

/**
 *
 */
export class CosmosClient {
  /**
   * @param url
   * @param chainID
   */
  constructor(public url: string, public chainID: string) {}

  async generatePrivKeyFromMnemonic(mnemonic: string) {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const node = bip32.fromSeed(seed);
    const child = node.derivePath("44'/118'/0'/0/0");

    return child.privateKey!;
  }

  wrapResponseWithHeight<T>(res: AxiosPromise<T>) {
    return (res as any) as AxiosPromise<{ height: number; result: T }>;
  }

  reparseAxiosResponse<T>(res: AxiosResponse) {
    const ret: AxiosResponse<T> = {
      ...res,
      data: JSON.parse(JSON.stringify(res.data), (_, value) =>
        codec.unpackAny(value),
      ),
    };

    return ret;
  }
}

export namespace CosmosClient {
  export class TxBuilder {
    txRaw: proto.cosmos.tx.v1beta1.TxRaw;

    constructor(
      private sdk: CosmosClient,
      body: proto.cosmos.tx.v1beta1.TxBody,
      authInfo: proto.cosmos.tx.v1beta1.AuthInfo,
    ) {
      const bodyBytes = proto.cosmos.tx.v1beta1.TxBody.encode(body).finish();
      const authInfoBytes = proto.cosmos.tx.v1beta1.AuthInfo.encode(
        authInfo,
      ).finish();

      this.txRaw = new proto.cosmos.tx.v1beta1.TxRaw({
        body_bytes: bodyBytes,
        auth_info_bytes: authInfoBytes,
        signatures: [],
      });
    }

    signDoc(accountNumber: Long) {
      const signDoc = new proto.cosmos.tx.v1beta1.SignDoc({
        body_bytes: this.txRaw.body_bytes,
        auth_info_bytes: this.txRaw.auth_info_bytes,
        account_number: accountNumber,
        chain_id: this.sdk.chainID,
      });

      return signDoc;
    }

    addSignature(privKey: PrivKey, signDoc: proto.cosmos.tx.v1beta1.SignDoc) {
      const sig = privKey.sign(
        proto.cosmos.tx.v1beta1.SignDoc.encode(signDoc).finish(),
      );
      this.txRaw.signatures.push(sig);
    }

    /**
     * @link BroadcastTxRequest
     */
    txBytes() {
      return proto.cosmos.tx.v1beta1.TxRaw.encode(this.txRaw).finish();
    }
  }
}
