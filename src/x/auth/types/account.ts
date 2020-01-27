import { Coin } from "../../../types/cosmos-sdk/coin";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { PubKey } from "../../../types/tendermint/pub-key";

/**
 * 
 */
export class BaseAccount {
  /**
   * 
   * @param address 
   * @param coins 
   * @param public_key 
   * @param account_number 
   * @param sequence 
   */
  constructor(
    public address: AccAddress,
    public coins: Coin[],
    public public_key: PubKey,
    public account_number: number,
    public sequence: number
  ) {

  }

  /**
   * @see Amino.reviver
   * @param value 
   */
  public static fromJSON(value: any) {
    return new this(
      AccAddress.fromBech32(value.address),
      value.coins,
      value.public_key,
      value.account_number,
      value.sequence
    );
  }
}