import * as bip32 from "bip32";
import * as bip39 from "bip39";

/**
 * Hierarchy Deterministic Wallet
 */
export namespace HDWallet {
  /**
   *
   * @param mnemonic
   * @param bip32Path
   */
  export async function generatePrivKey(
    mnemonic: string,
    coinType = 118,
    account = 0
  ): Promise<Buffer> {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const node = bip32.fromSeed(seed);
    const child = node.derivePath(`m/44'/${coinType}'/${account}'/0/0`);

    return child.privateKey!;
  }
}
