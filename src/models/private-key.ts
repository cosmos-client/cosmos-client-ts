import * as bip32 from 'bip32';
import * as bip39 from 'bip39';
import * as bitcoinjs from 'bitcoinjs-lib'
import * as crypto from 'crypto';
const secp256k1 = require('secp256k1');
import { PublicKey } from "./public-key";

export class PrivateKey extends PublicKey {
  private ecPair: bitcoinjs.ECPairInterface;
  private privateKey: Buffer;

  constructor(
    privateKey: Buffer
  ) {
    const ecPair = bitcoinjs.ECPair.fromPrivateKey(privateKey, {compressed : false});
    super(ecPair.publicKey);

    this.ecPair = ecPair;
    this.privateKey = privateKey;
  }

  public static async fromBip39Mnemonic(mnemonic: string) {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const node = bip32.fromSeed(seed);
    const child = node.derivePath("m/44'/118'/0'/0/0");

    return new this(child.privateKey!);
  }

  public sign(message: string) {
    const hash = crypto.createHash('sha256').update(message).digest('hex');
    const buf = Buffer.from(hash, 'hex');
    const signObj = secp256k1.sign(buf, this.ecPair);
    const signatureBase64 = Buffer.from(signObj.signature, 'binary').toString('base64');

    return signatureBase64;
  }
}
