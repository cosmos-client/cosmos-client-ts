import { AnyI } from "../../../codec/any";
import { BaseAccount } from "./account";
import { ModuleAccount as Generated } from "../../../pe/cosmos/auth/v1beta1/auth_pb";
import { codec } from "../../../codec";

export type ModuleAccountI = AnyI & {
  getName(): string;
  getPermissions(): string[];
  hasPermissions(permission: string): boolean;
};

export class ModuleAccount implements ModuleAccountI {
  static "@type": "/cosmos.auth.v1beta1.ModuleAccount";
  "@type": "/cosmos.auth.v1beta1.ModuleAccount";

  /**
   *
   * @param base_account
   * @param name
   * @param permissions
   */
  constructor(
    public base_account: BaseAccount,
    public name: string,
    public permissions: string[],
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new ModuleAccount(
      BaseAccount.fromJSON(value.base_account),
      value.name,
      value.permissions,
    );
  }

  pack() {
    const generated = new Generated();
    generated.setBaseAccount(this.base_account.generated());
    generated.setName(this.name);
    generated.setPermissionsList(this.permissions);

    return codec.packAny(generated);
  }

  getName() {
    return this.name;
  }

  getPermissions() {
    return this.permissions;
  }

  hasPermissions(permission: string) {
    return this.permissions.includes(permission);
  }
}
