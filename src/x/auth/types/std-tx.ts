import { Msg } from "../../../types/cosmos-sdk/msg";
import { StdFee } from "./std-fee";
import { StdSignature } from "./std-signature";
import { Amino, AminoWrapping } from "../../../common";
import { StdSignMsg } from "./std-sign-msg";

/**
 *
 */
export class StdTx {
  /**
   *
   * @param msg
   * @param fee
   * @param signatures
   * @param memo
   */
  constructor(
    public msg: (Msg | AminoWrapping)[],
    public fee: StdFee,
    public signatures: StdSignature[],
    public memo: string
  ) {}

  getSignBytes(chainID: string, accountNumber: number, sequence: number) {
    const stdSignMsg: StdSignMsg = {
      account_number: accountNumber,
      chain_id: chainID,
      fee: this.fee,
      memo: this.memo,
      msgs: this.msg,
      sequence
    };
    const sortedJSON = JSON.stringify(stdSignMsg, (_, v) =>
      !(v instanceof Array || v === null) && typeof v == "object"
        ? Object.keys(v)
            .sort()
            .reduce((r: any, k) => {
              r[k] = v[k];
              return r;
            }, {})
        : v
    );

    return new Buffer(sortedJSON);
  }

  static fromJSON(value: any) {
    return new this(value.msg, value.fee, value.signatures, value.memo);
  }
}
