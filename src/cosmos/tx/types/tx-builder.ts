import { CosmosSDK } from "../../../cosmos-sdk";
import {
  AuthInfo,
  SignDoc,
  TxBody,
  TxRaw,
} from "../../../generated/cosmos/tx/v1beta1/tx_pb";
import { PrivKey } from "../../crypto";

export { AuthInfo, TxBody } from "../../../generated/cosmos/tx/v1beta1/tx_pb";

export class TxBuilder {
  txRaw: TxRaw;

  constructor(private sdk: CosmosSDK, body: TxBody, authInfo: AuthInfo) {
    const authInfoBytes = authInfo.serializeBinary();
    const bodyBytes = body.serializeBinary();
    this.txRaw = new TxRaw();
    this.txRaw.setAuthInfoBytes(authInfoBytes);
    this.txRaw.setBodyBytes(bodyBytes);
  }

  signDoc(accountNumber: number) {
    const signDoc = new SignDoc();
    signDoc.setAccountNumber(accountNumber);
    signDoc.setAuthInfoBytes(this.txRaw.getAuthInfoBytes());
    signDoc.setBodyBytes(this.txRaw.getBodyBytes());
    signDoc.setChainId(this.sdk.chainID);

    return signDoc;
  }

  addSignature(privKey: PrivKey, signDoc: SignDoc) {
    const sig = privKey.sign(Buffer.from(signDoc.serializeBinary()));
    this.txRaw.addSignatures(sig);
  }

  /**
   * @link BroadcastTxRequest
   */
  txBytes() {
    return this.txRaw.serializeBinary().toString();
  }
}
