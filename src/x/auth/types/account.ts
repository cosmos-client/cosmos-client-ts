import { Coin } from "../../../types/cosmos-sdk/coin";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { Amino } from "../../../common/amino";
import { PubKey } from "../../../types/tendermint/pub-key";

/**
 * 
 */
@Amino.RegisterConcrete('auth/Account')
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
   * @param obj 
   */
  public static fromJSON(obj: any) {
    return new this(
      AccAddress.fromBech32(obj.address),
      obj.coins,
      obj.public_key,
      obj.account_number,
      obj.sequence
    );
  }
}