import { AccAddress } from "../../../types";
import { PubKey } from "../../../tendermint";

export class ModuleAccount {
  /**
   *
   * @param base_account
   * @param name
   * @param permissions
   */
  constructor(
    public base_account: {
      address: AccAddress;
      public_key: PubKey;
      account_number: number;
      sequence: number;
    },
    public name: string,
    public permissions: string[],
  ) {}

  /**
   *
   * @param value
   */
  public static fromJSON(value: any) {
    return new ModuleAccount(value.base_account, value.name, value.permissions);
  }
}
