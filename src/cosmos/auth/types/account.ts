import { AccAddress } from "../../types/address/acc-address";
import { PubKey } from "../../crypto/types/key";
import { AnyI } from "../../../codec/any";
import { BaseAccount as Generated } from "../../../pe/cosmos/auth/v1beta1/auth_pb";
import { codec } from "../../../codec";

export type AccountI = AnyI & {
  getAddress(): AccAddress;
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
    public address: AccAddress,
    public public_key: PubKey,
    public account_number: bigint,
    public sequence: bigint,
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
      AccAddress.fromBech32(value.address),
      value.public_key,
      BigInt(value.account_number),
      BigInt(value.sequence),
    );
  }

  generated() {
    const generated = new Generated();
    generated.setAddress(this.address.toBech32());
    generated.setPubKey(this.public_key.pack());
    generated.setAccountNumber(Number(this.account_number));
    generated.setSequence(Number(this.sequence));

    return generated;
  }

  pack() {
    const generated = this.generated();

    return codec.packAny(generated);
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
