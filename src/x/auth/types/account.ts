import { AccAddress } from "../../../types/address/acc-address";
import { PubKey } from "../../../tendermint/types/key";

/**
 *
 */
export class BaseAccount {
  /**
   *
   * @param address
   * @param public_key
   * @param account_number
   * @param sequence
   */
  constructor(
    public address: AccAddress,
    public public_key: PubKey,
    public account_number: number,
    public sequence: number,
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new BaseAccount(
      AccAddress.fromBech32(value.address),
      value.public_key,
      value.account_number,
      value.sequence,
    );
  }
}
