import { Any } from "../../types/any";
import { BaseAccount } from "./account";

export type ModuleAccountI = Any & {
  getName(): string | null;
  getPermissions(): string[] | null;
  hasPermissions(permission: string): boolean | null;
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
    public base_account?: BaseAccount,
    public name?: string,
    public permissions?: string[],
  ) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new ModuleAccount(
      new BaseAccount(value.base_account),
      value.name,
      value.permissions,
    );
  }

  getName() {
    return this.name || null;
  }

  getPermissions() {
    return this.permissions || null;
  }

  hasPermissions(permission: string) {
    return this.permissions?.includes(permission) || null;
  }
}
