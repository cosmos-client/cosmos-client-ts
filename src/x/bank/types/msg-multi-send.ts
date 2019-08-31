import { Coin } from "../../../types/cosmos-sdk/coin";
import { Amino } from "../../../common/amino";

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
@Amino.RegisterConcrete('cosmos-sdk/MsgMultiSend')
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
}
