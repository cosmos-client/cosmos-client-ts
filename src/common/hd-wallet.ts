import * as bip32 from 'bip32';
import * as bip39 from 'bip39';

/**
 * 階層的決定性ウォレットのモジュール。
 */
export module HdWallet {
  /**
   * BIP44に従ってBIP32鍵導出パスを作る。
   * @param index 
   */
  export function getBip32PathByBip44(index: string): string {
    const bip32CoinType = 118;

    return  `m/44'/${bip32CoinType}'/0'/0/${index}`;
  }

  /**
   * BIP39に従ってニーモニックから秘密鍵を生成する。
   * @param mnemonic 
   * @param bip32Path 
   */
  export async function generatePrivKeyByBip39(mnemonic: string, bip32Path: string): Promise<Buffer> {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const node = bip32.fromSeed(seed);
    const child = node.derivePath(bip32Path);
  
    return child.privateKey!;
  }
}
