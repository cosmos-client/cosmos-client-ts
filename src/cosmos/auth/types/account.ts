import { AccAddress } from "../../types/address/acc-address";
import { PubKey } from "../../crypto/types/key";
import { Any } from "../../types/any";

export type AccountI = Any & {
  getAddress(): AccAddress | null;
  setAddress(address: AccAddress): void;
  getPubKey(): PubKey | null;
  setPubkey(pubKey: PubKey): void;
  getAccountNumber(): bigint | null;
  setAccountNumber(accountNumber: bigint): void;
};

/**
 *
 */
export class BaseAccount implements AccountI {
  static "@type": "/cosmos.auth.v1beta1.BaseAccount";
  "@type": "/cosmos.auth.v1beta1.BaseAccount";

  /**
   *
   * @param address
   * @param public_key
   * @param account_number
   * @param sequence
   */
  constructor(
    public address?: AccAddress,
    public public_key?: PubKey,
    public account_number?: bigint,
    public sequence?: bigint,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.account_number) {
      value.account_number = this.account_number.toString();
    }
    if (this.sequence) {
      value.sequence = this.sequence.toString();
    }

    return value;
  }

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new BaseAccount(
      value?.address ? AccAddress.fromBech32(value.address) : undefined,
      value?.public_key,
      BigInt(value?.account_number),
      BigInt(value?.sequence),
    );
  }

  getAddress() {
    return this.address || null;
  }

  setAddress(address: AccAddress) {
    if (this.address) {
      throw Error();
    }
    this.address = address;
  }

  getPubKey() {
    return this.public_key || null;
  }

  setPubkey(pubKey: PubKey) {
    if (this.public_key) {
      throw Error();
    }
    this.public_key = pubKey;
  }

  getAccountNumber() {
    return this.account_number || null;
  }

  setAccountNumber(accountNumber: bigint) {
    if (this.account_number) {
      throw Error();
    }
    this.account_number = accountNumber;
  }
}
