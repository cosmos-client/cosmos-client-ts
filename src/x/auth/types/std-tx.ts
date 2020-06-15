import { Msg } from "../../../types/msg";
import { StdSignature } from "./std-signature";
import { StdSignMsg } from "./std-sign-msg";
import { Tx } from "../../../types/tx";
import { codec } from "../../../codec";
import { StdTx as StdTxObject, StdTxFee } from "../../../api";
import { canonicalizeJSON } from "./canonicalize-json";

/**
 *
 */
export class StdTx extends Tx {
  /**
   *
   * @param msg
   * @param fee
   * @param signatures
   * @param memo
   */
  constructor(
    public msg: (Msg | codec.AminoWrapping)[],
    public fee: StdTxFee,
    public signatures: StdSignature[] | null,
    public memo: string,
  ) {
    super();
  }

  getSignBytes(chainID: string, accountNumber: number, sequence: number) {
    const stdSignMsg: StdSignMsg = {
      account_number: accountNumber,
      chain_id: chainID,
      fee: this.fee,
      memo: this.memo,
      msgs: this.msg,
      sequence,
    };
    const obj = JSON.parse(codec.toJSONString(stdSignMsg));
    const canonicalized = canonicalizeJSON(obj);
    const encoder = new TextEncoder();
    const encoded = encoder.encode(JSON.stringify(canonicalized));

    return Buffer.from(encoded);
  }

  static fromJSON(value: any) {
    return new StdTx(value.msg, value.fee, value.signatures, value.memo);
  }
}
