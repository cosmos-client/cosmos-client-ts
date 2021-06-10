import * as bip32 from 'bip32';
import * as bip39 from 'bip39';
import { config } from '../../config/';

export type PrivKey = {
  bytes(): Uint8Array;
  sign(msg: Uint8Array): Uint8Array;
  pubKey(): PubKey;
};

export type PubKey = {
  bytes(): Uint8Array;
  verify(msg: Uint8Array, sig: Uint8Array): boolean;
  address(): Uint8Array;
};

export async function generatePrivKeyFromMnemonic(mnemonic: string) {
  const seed = await bip39.mnemonicToSeed(mnemonic);
  const node = bip32.fromSeed(seed);
  const child = node.derivePath(`44'/${config.slip44.coinType}'/0'/0/0`);

  return Uint8Array.from(child.privateKey!);
}
