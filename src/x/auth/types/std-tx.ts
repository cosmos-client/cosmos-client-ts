import { Msg } from "../../../types/msg";
import { StdSignature } from "./std-signature";
import { StdSignMsg } from "./std-sign-msg";
import { Tx } from "../../../types/tx";
import { codec } from "../../../codec";
import { StdTx as StdTxObject, StdTxFee } from "../../../api";

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
    const sortedJSON = JSON.stringify(stdSignMsg, (_, v) =>
      !(v instanceof Array || v === null) && typeof v == "object"
        ? Object.keys(v)
            .sort()
            .reduce((r: any, k) => {
              r[k] = v[k];
              return r;
            }, {})
        : v,
    );

    return new Buffer(sortedJSON);
  }

  toObject(): StdTxObject {
    return JSON.parse(codec.toJSONString(this)).value;
  }

  static fromJSON(value: any) {
    return new StdTx(value.msg, value.fee, value.signatures, value.memo);
  }
}
