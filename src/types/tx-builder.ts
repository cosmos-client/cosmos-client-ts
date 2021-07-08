import { cosmos } from '../proto';
import Long from 'long';
import { CosmosSDK } from '../sdk';

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

  signDoc(accountNumber: Long) {
    const signDoc = new cosmos.tx.v1beta1.SignDoc({
      body_bytes: this.txRaw.body_bytes,
      auth_info_bytes: this.txRaw.auth_info_bytes,
      chain_id: this.sdk.chainID,
      account_number: accountNumber.isZero() ? null : accountNumber,
    });

    return signDoc;
  }

  signDocBytes(accountNumber: Long) {
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
}
