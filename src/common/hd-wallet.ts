import * as bip32 from "bip32";
import * as bip39 from "bip39";

/**
 * Hierarchy Deterministic Wallet
 */
export namespace HDWallet {
  /**
   *
   * @param index
   */
  export function getBip32PathByBip44(index: number): string {
    const bip32CoinType = 118;

    return `m/44'/${bip32CoinType}'/0'/0/${index}`;
  }

  /**
   *
   * @param mnemonic
   * @param bip32Path
   */
  export async function generatePrivKeyByBip39(
    mnemonic: string,
    bip32Path: string
  ): Promise<Buffer> {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const node = bip32.fromSeed(seed);
    const child = node.derivePath(bip32Path);

    return child.privateKey!;
  }
}
