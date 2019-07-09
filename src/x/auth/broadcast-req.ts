import { StdTx, StdSignDoc } from "./stdtx";
import { PrivKey } from "../../tendermint/crypto/crypto";

/**
 * 
 */
export class BroadcastReq {
  public tx: StdTx;
  public mode: string;

  /**
   * 
   * @param privKey 
   * @param stdSignDoc 
   * @param modeType 
   */
  constructor(privKey: PrivKey, stdSignDoc: StdSignDoc, modeType = "sync") {
    const signature = privKey.sign(JSON.stringify(stdSignDoc));

    this.tx = new StdTx(
      stdSignDoc.msgs,
      stdSignDoc.fee,
      [
        {
          signature: signature.toString('base64'),
          pub_key: privKey.getPubKey()
        }
      ],
      stdSignDoc.memo
    );
    this.mode = modeType;
  }
}