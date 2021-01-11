import { Msg } from "../types/msg";
import { StdSignature } from "../cosmos/auth/types/std-signature";
import { StdSignMsg } from "../cosmos/auth/types/std-sign-msg";
import { Tx } from "../types/tx";
import { codec } from "../../codec";
import { StdTxFee } from "../../api";
import { sortJSON } from "./sort-json";

if (
  typeof process !== "undefined" &&
  process.versions &&
  process.versions.node
) {
  (global as any).TextEncoder = require("util").TextEncoder;
}

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

  getSignBytes(chainID: string, accountNumber: string, sequence: string) {
    const stdSignMsg: StdSignMsg = {
      account_number: accountNumber,
      chain_id: chainID,
      fee: this.fee,
      memo: this.memo,
      msgs: this.msg,
      sequence,
    };
    const obj = JSON.parse(codec.toJSONString(stdSignMsg));
    const canonicalized = sortJSON(obj);
    const encoder = new TextEncoder();
    const encoded = encoder.encode(JSON.stringify(canonicalized));

    return Buffer.from(encoded);
  }

  static fromJSON(value: any) {
    return new StdTx(value.msg, value.fee, value.signatures, value.memo);
  }
}
