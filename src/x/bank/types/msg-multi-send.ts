import { Coin } from "../../../types/cosmos-sdk/coin";

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
export class MsgMultiSend {
  /**
   * 
   * @param inputs 
   * @param outputs 
   */
  constructor(
    public inputs: Input[],
    public outputs: Output[]
  ) {
    
  }

  static fromJSON(value: any) {
    return new this(
      value.inputs,
      value.outputs
    )
  }
}
