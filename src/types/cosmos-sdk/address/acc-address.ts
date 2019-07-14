import * as bech32 from 'bech32';
import { Address, bech32Prefix } from './address';

/**
 * AccAddressのクラス。
 */
export class AccAddress extends Address {
  /**
   * Bech32フォーマットのアドレスに変換する。
   */
  public toBech32() {
    const words = bech32.toWords(Buffer.from(this._value));
    return bech32.encode(bech32Prefix.accAddr, words);
  }

  /**
   * Bech32フォーマットのアドレスからインスタンスを作成する。
   * @param accAddress 
   */
  public static fromBech32(accAddress: string) {
    const { prefix, words } = bech32.decode(accAddress)
    if (prefix !== bech32Prefix.accAddr) {
      throw Error();
    }

    return new AccAddress(bech32.fromWords(words));
  }

  /**
   * JSON.stringify時に参照される。
   */
  public toJSON() {
    return this.toBech32();
  }
}
