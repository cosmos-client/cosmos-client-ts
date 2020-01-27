import { Coin } from "../../../types/cosmos-sdk/coin";
import { Msg } from "../../../types/cosmos-sdk/msg";

export interface Input {
  address: string;
  coins: Coin[];
}

export interface Output {
  address: string;
  coins: Coin[];
}

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
    return new this(value.inputs, value.outputs);
  }
}
