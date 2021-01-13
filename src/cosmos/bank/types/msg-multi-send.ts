import { Msg } from "../../types/msg";
import { Coin } from "../../../generated/api";
import { codec } from "../../../codec";
import { MsgMultiSend } from "../../../pe/cosmos/bank/v1beta1/tx_pb";
import {
  Input as GeneratedInput,
  Output as GeneratedOutput,
} from "../../../pe/cosmos/bank/v1beta1/bank_pb";

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
export class MsgMultiSend_ implements Msg {
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

  pack() {
    Generated;
    const generated = new Generated();
    generated.setInputsList(
      this.inputs.map((input) => {
        const generated_ = new GeneratedInput();
        generated_.set;

        return generated_;
      }),
    );
    generated.setOutputsList(
      this.inputs.map((input) => {
        const generated_ = new GeneratedOutput();

        return generated_;
      }),
    );

    return codec.packAny(generated);
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
