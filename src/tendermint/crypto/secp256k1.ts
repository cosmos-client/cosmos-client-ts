import * as crypto from 'crypto';
import * as secp256k1 from 'secp256k1';
import { PubKey, PrivKey } from "./crypto";
import { AminoRegisterConcrete } from '../amino';
import { TextEncoder } from 'util';

@AminoRegisterConcrete('tendermint/PubKeySecp256k1')
export class PubKeySecp256k1 implements PubKey {
  private pubKey: Buffer;

  constructor(
    pubKey: Buffer
  ) {
    this.pubKey = pubKey;
  }

  public verify(message: string, signature: Buffer): boolean {
    const hash = crypto.createHash('sha256').update(message).digest('hex');
    const buffer = Buffer.from(hash, 'hex');

    return secp256k1.verify(buffer, signature, this.pubKey);
  }

  public toBuffer() {
    return this.pubKey;
  }

  public toString() {
    return this.pubKey.toString('base64');
  }

  public toJSON() {
    return this.toString();
  }

  public static fromJSON(value: string) {
    const buffer = Buffer.from(new TextEncoder().encode(value));
    return new this(buffer);
  }
}

@AminoRegisterConcrete('tendermint/PrivKeySecp256k1')
export class PrivKeySecp256k1 implements PrivKey {
  private pubKey: PubKey;
  private privKey: Buffer;

  constructor(
    privKey: Buffer
  ) {
    this.pubKey = new PubKeySecp256k1(secp256k1.publicKeyCreate(privKey));
    this.privKey = privKey;
  }

  public getPubKey() {
    return this.pubKey;
  }

  public sign(message: string): Buffer {
    const hash = crypto.createHash('sha256').update(message).digest('hex');
    const buffer = Buffer.from(hash, 'hex');
    const signature = secp256k1.sign(buffer, this.privKey);

    return signature.signature;
  }

  public toBuffer() {
    return this.privKey;
  }

  public toString() {
    return this.privKey.toString('base64');
  }

  public toJSON() {
    return this.toString();
  }

  public static fromJSON(value: string) {
    const buffer = Buffer.from(new TextEncoder().encode(value));
    return new this(buffer);
  }
}
