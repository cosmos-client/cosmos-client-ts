import { Coin } from "../../../types/coin";
import { Msg } from "../../../types/msg";

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
export class MsgMultiSend extends Msg {
  /**
   *
   * @param inputs
   * @param outputs
   */
  constructor(public inputs: Input[], public outputs: Output[]) {
    super();
  }

  static fromJSON(value: any) {
    return new MsgMultiSend(value.inputs, value.outputs);
  }
}
