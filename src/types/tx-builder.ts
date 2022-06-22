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

  /**
   * The order of signatures must be same to the declared order in authInfo.
   * @param signature
   */
  addSignature(signature: Uint8Array) {
    this.txRaw.signatures.push(signature);
  }

  /**
   * Permutation of signatures must be same to the declared permutation in modeInfo.
   * @param signatures
   * @param modeInfo
   * @returns
   */
  createSignatureOfMultisig(signatures: (Uint8Array | null)[], modeInfo: cosmos.tx.v1beta1.ModeInfo.IMulti): Uint8Array | Error {
    const bitArray = cosmos.crypto.multisig.v1beta1.CompactBitArray.from(signatures.map((sig) => !!sig));
    if (bitArray?.elems !== modeInfo.bitarray?.elems) {
      return Error('Permutation of signatures is different from the declared permutation in modeInfo');
    }

    const multiSignature = new cosmos.crypto.multisig.v1beta1.MultiSignature({
      signatures: signatures.filter((sig) => !!sig) as Uint8Array[],
    });
    const bundledSignature = cosmos.crypto.multisig.v1beta1.MultiSignature.encode(multiSignature).finish();

    return bundledSignature;
  }

  /**
   * @link BroadcastTxRequest
   */
  txBytes() {
    const bytes = cosmos.tx.v1beta1.TxRaw.encode(this.txRaw).finish();
    return Buffer.from(bytes).toString('base64');
  }

  toProtoJSON() {
    const body = cosmos.tx.v1beta1.TxBody.decode(this.txRaw.body_bytes);
    const authInfo = cosmos.tx.v1beta1.AuthInfo.decode(this.txRaw.auth_info_bytes);

    return codec.instanceToProtoJSON(
      new cosmos.tx.v1beta1.Tx({
        body,
        auth_info: authInfo,
        signatures: this.txRaw.signatures,
      }),
    );
  }

  protoJSONStringify(space?: number) {
    return JSON.stringify(this.toProtoJSON(), undefined, space);
  }
}
