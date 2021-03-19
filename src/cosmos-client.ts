import Axios from 'axios';
import * as bip32 from 'bip32';
import * as bip39 from 'bip39';
import * as types from './proto';
import { PrivKey } from './cosmos/crypto';

/**
 *
 */
export class CosmosClient {
  static config = Axios.defaults;

  /**
   * @param url
   * @param chainID
   */
  constructor(public url: string, public chainID: string) { }

  async generatePrivKeyFromMnemonic(mnemonic: string) {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const node = bip32.fromSeed(seed);
    const child = node.derivePath("44'/118'/0'/0/0");

    return Uint8Array.from(child.privateKey!);
  }
}

export namespace CosmosClient {
  export class TxBuilder {
    txRaw: types.cosmos.tx.v1beta1.TxRaw;

    constructor(private sdk: CosmosClient, body: types.cosmos.tx.v1beta1.TxBody, authInfo: types.cosmos.tx.v1beta1.AuthInfo) {
      const bodyBytes = types.cosmos.tx.v1beta1.TxBody.encode(body).finish();
      const authInfoBytes = types.cosmos.tx.v1beta1.AuthInfo.encode(authInfo).finish();

      this.txRaw = new types.cosmos.tx.v1beta1.TxRaw({
        body_bytes: bodyBytes,
        auth_info_bytes: authInfoBytes,
        signatures: [],
      });
    }

    signDoc(accountNumber: Long) {
      const signDoc = new types.cosmos.tx.v1beta1.SignDoc({
        body_bytes: this.txRaw.body_bytes,
        auth_info_bytes: this.txRaw.auth_info_bytes,
        chain_id: this.sdk.chainID,
        account_number: accountNumber,
      });

      return signDoc;
    }

    addSignature(privKey: PrivKey, signDoc: types.cosmos.tx.v1beta1.SignDoc) {
      const sig = privKey.sign(types.cosmos.tx.v1beta1.SignDoc.encode(signDoc).finish());
      this.txRaw.signatures.push(sig);
    }

    /**
     * @link BroadcastTxRequest
     */
    txBytes() {
      const bytes = types.cosmos.tx.v1beta1.TxRaw.encode(this.txRaw).finish();
      return Buffer.from(bytes).toString('base64');
    }
  }
}
