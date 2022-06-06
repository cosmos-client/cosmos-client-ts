import { codec } from '.';
import { cosmos } from '../proto';
import { CosmosSDK } from '../sdk';
import Long from 'long';

export class TxBuilder {
  txRaw: cosmos.tx.v1beta1.TxRaw;

  constructor(private sdk: CosmosSDK, body: cosmos.tx.v1beta1.TxBody, authInfo: cosmos.tx.v1beta1.AuthInfo) {
    const bodyBytes = cosmos.tx.v1beta1.TxBody.encode(body).finish();
    const authInfoBytes = cosmos.tx.v1beta1.AuthInfo.encode(authInfo).finish();

    this.txRaw = new cosmos.tx.v1beta1.TxRaw({
      body_bytes: bodyBytes,
      auth_info_bytes: authInfoBytes,
      signatures: [],
    });
  }

  signDoc(accountNumber?: number | Long) {
    if (typeof accountNumber === 'number') {
      accountNumber = Long.fromNumber(accountNumber);
    }
    const signDoc = new cosmos.tx.v1beta1.SignDoc({
      body_bytes: this.txRaw.body_bytes,
      auth_info_bytes: this.txRaw.auth_info_bytes,
      chain_id: this.sdk.chainID,
      account_number: accountNumber?.isZero() ? null : accountNumber,
    });

    return signDoc;
  }

  signDocBytes(accountNumber?: number | Long) {
    return cosmos.tx.v1beta1.SignDoc.encode(this.signDoc(accountNumber)).finish();
  }

  addSignature(sig: Uint8Array) {
    this.txRaw.signatures.push(sig);
  }

  /**
   * @link BroadcastTxRequest
   */
  txBytes() {
    const bytes = cosmos.tx.v1beta1.TxRaw.encode(this.txRaw).finish();
    return Buffer.from(bytes).toString('base64');
  }

  packCosmosAny() {
    const body = cosmos.tx.v1beta1.TxBody.decode(this.txRaw.body_bytes);
    const authInfo = cosmos.tx.v1beta1.AuthInfo.decode(this.txRaw.auth_info_bytes);

    return codec.packCosmosAny({
      body,
      auth_info: authInfo,
      signatures: this.txRaw.signatures,
    });
  }

  cosmosJSONStringify(space?: number) {
    return JSON.stringify(canonicalizeJSON(this.packCosmosAny()), undefined, space);
  }
  
  canonicalizeJSON(value: any): any {
    if (Object.prototype.toString.call(value) === "[object Object]") {
      const sorted = {} as { [key: string]: any };
      const keys = Object.keys(value).sort();

      for (const key of keys) {
        const keyValue = value[key];
        if (keyValue != null) {
          sorted[key] = canonicalizeJSON(keyValue);
        }
      }

      return sorted;
    }

    if (Array.isArray(value)) {
      return value.map(canonicalizeJSON);
    }

    return value === undefined ? null : value;
  }
}
