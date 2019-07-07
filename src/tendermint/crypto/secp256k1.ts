import * as bitcoinjs from 'bitcoinjs-lib';
import * as crypto from 'crypto';
import * as secp256k1 from 'secp256k1';
import { PubKey, PrivKey } from "./crypto";

export class PubKeySecp256k1 implements PubKey {
  public readonly type: string;
  public readonly value: string;
  private _publicKey: Buffer;

  constructor(
    publicKey: Buffer
  ) {
    this.type = 'tendermint/PubKeySecp256k1'
    this.value = publicKey.toString('base64');
    this._publicKey = publicKey;
  }

  public get pubKeyBuffer() {
    return this._publicKey;
  }

  public verify(message: string, signature: Buffer): boolean {
    const hash = crypto.createHash('sha256').update(message).digest('hex');
    const buffer = Buffer.from(hash, 'hex');

    return secp256k1.verify(buffer, signature, this._publicKey);
  }
}

export class PrivKeySecp256k1 extends PubKeySecp256k1 implements PrivKey {
  public readonly type: string;
  public readonly value: string;
  private _privateKey: Buffer;

  constructor(
    privateKey: Buffer
  ) {
    const ecPair = bitcoinjs.ECPair.fromPrivateKey(privateKey, { compressed: false });
    super(ecPair.publicKey);

    this.type = 'tendermint/PrivKeySecp256k1';
    this.value = privateKey.toString('base64');
    this._privateKey = privateKey;
  }

  public get privKeyBuffer() {
    return this._privateKey;
  }

  public sign(message: string): Buffer {
    const hash = crypto.createHash('sha256').update(message).digest('hex');
    const buffer = Buffer.from(hash, 'hex');
    const signature = secp256k1.sign(buffer, this._privateKey);

    return signature.signature;
  }
}
