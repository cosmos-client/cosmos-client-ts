import { StdTx, StdSignDoc } from "./stdtx";
import { PrivKey } from "../../tendermint/crypto/crypto";
import { PubKeySecp256k1 } from "../../tendermint/crypto/secp256k1";

export class SignedTx {
  public tx: StdTx;
  public mode: string;

  constructor(privKey: PrivKey, stdSignDoc: StdSignDoc, modeType = "sync") {
    const signature = privKey.sign(JSON.stringify(stdSignDoc));

    this.tx = {
      msg: stdSignDoc.msgs,
      fee: stdSignDoc.fee,
      signatures: [
        {
          signature: signature.toString('base64'),
          pub_key: new PubKeySecp256k1(privKey.pubKeyBuffer)
        }
      ],
      memo: stdSignDoc.memo
    };
    this.mode = modeType;
  }
}