import { Msg } from "../../types/msg";
import { Coin } from "../../../api";
import { codec } from "../../../codec";

export type Input = {
  address: string;
  coins: Coin[];
};

export type Output = {
  address: string;
  coins: Coin[];
};

/**
 *
 */
export class MsgMultiSend implements Msg {
  static "@type": "/cosmos.bank.v1beta1.MsgMultiSend";
  "@type": "/cosmos.bank.v1beta1.MsgMultiSend";

  /**
   *
   * @param inputs
   * @param outputs
   */
  constructor(public inputs: Input[], public outputs: Output[]) {}

  static fromJSON(value: any) {
    return new MsgMultiSend(value.inputs, value.outputs);
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
