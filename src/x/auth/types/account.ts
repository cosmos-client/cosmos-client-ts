import { AccAddress } from "../../../types/address/acc-address";
import { PubKey } from "../../../tendermint/types/key";
import { Coin } from "../../../api";

/**
 *
 */
export class BaseAccount {
  /**
   *
   * @param address
   * @param public_key
   * @param coins
   * @param account_number
   * @param sequence
   */
  constructor(
    public address?: AccAddress,
    public public_key?: PubKey,
    public coins: Coin[] = [],
    public account_number = 0,
    public sequence = 0,
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new BaseAccount(
      !!value.address ? AccAddress.fromBech32(value.address) : undefined,
      !!value.public_key ? value.public_key : undefined,
      value.coins,
      value.account_number,
      value.sequence,
    );
  }
}
