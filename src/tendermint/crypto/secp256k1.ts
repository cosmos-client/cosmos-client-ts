import * as crypto from 'crypto';
import * as secp256k1 from 'secp256k1';
import { PubKey, PrivKey } from "./crypto";
import { AminoRegisterConcrete } from '../amino';

@AminoRegisterConcrete('tendermint/PubKeySecp256k1')
export class PubKeySecp256k1 implements PubKey {
  public _publicKey: Buffer;

  constructor(
    publicKey: Buffer
  ) {
    this._publicKey = publicKey;
  }

  public toString() {
    return this._publicKey.toString('base64');
  }

  public verify(message: string, signature: Buffer): boolean {
    const hash = crypto.createHash('sha256').update(message).digest('hex');
    const buffer = Buffer.from(hash, 'hex');

    return secp256k1.verify(buffer, signature, this._publicKey);
  }

  public toJSON() {
    return this.toString();
  }
}

export class PrivKeySecp256k1 implements PrivKey {
  public readonly type = 'tendermint/PrivKeySecp256k1';
  public readonly value: string;
  private _pubKey: PubKey;
  private _privateKey: Buffer;

  constructor(
    privateKey: Buffer
  ) {
    this.value = privateKey.toString('base64');
    this._pubKey = new PubKeySecp256k1(secp256k1.publicKeyCreate(privateKey));
    this._privateKey = privateKey;
  }

  public getPubKey() {
    return this._pubKey;
  }

  public getPrivKeyBuffer() {
    return this._privateKey;
  }

  public sign(message: string): Buffer {
    const hash = crypto.createHash('sha256').update(message).digest('hex');
    const buffer = Buffer.from(hash, 'hex');
    const signature = secp256k1.sign(buffer, this._privateKey);

    return signature.signature;
  }
}
