import { Coin } from "../../cosmos-sdk/coin/coin";
import { PubKey } from "../../tendermint/crypto/crypto";
import { AccAddress } from "../../cosmos-sdk/address";
import { Amino } from "../../tendermint/amino";

/**
 * アカウントのクラス。
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
    public account_number: bigint,
    public sequence: bigint
  ) {
    
  }

  /**
   * addressはAccAddress型として読み込むためのfromJSONメソッド。
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