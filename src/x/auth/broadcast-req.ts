import { StdTx, StdSignDoc } from "./stdtx";
import { PrivKey } from "../../tendermint/crypto/crypto";

export class BroadcastReq {
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
          pub_key: privKey.getPubKey()
        }
      ],
      memo: stdSignDoc.memo
    };
    this.mode = modeType;
  }
}