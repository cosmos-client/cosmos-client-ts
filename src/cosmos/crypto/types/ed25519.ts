import * as crypto from "crypto";
import * as nacl from "tweetnacl";
import { PrivKey, PubKey } from "..";
import { codec } from "../../../codec";
import {
  PrivKey as GeneratedPrivKey,
  PubKey as GeneratedPubKey,
} from "../../../pe/cosmos/crypto/ed25519/keys_pb";

/**
 * ed25519
 */
export class PrivKeyEd25519 implements PrivKey {
  static "@type": "/cosmos.crypto.ed25519.PrivKey";
  "@type": "/cosmos.crypto.ed25519.PrivKey";

  private _pubKey: PubKeyEd25519;
  private _privKey: Buffer;

  /**
   *
   * @param privKey
   */
  constructor(privKey: Buffer) {
    const keypair = nacl.sign.keyPair.fromSeed(new Uint8Array(privKey));
    this._pubKey = new PubKeyEd25519(Buffer.from(keypair.publicKey));
    this._privKey = privKey;
  }

  pack() {
    const generated = new GeneratedPrivKey();
    generated.setKey(this._privKey);

    return codec.packAny(generated);
  }

  /**
   *
   */
  bytes() {
    return Buffer.from(this._privKey);
  }

  /**
   *
   */
  pubKey() {
    return this._pubKey;
  }

  /**
   *
   * @param message
   */
  sign(message: Buffer) {
    const keypair = nacl.sign.keyPair.fromSeed(new Uint8Array(this._privKey));
    return Buffer.from(
      nacl.sign(new Uint8Array(message), new Uint8Array(keypair.secretKey)),
    );
  }

  /**
   *
   */
  toBase64() {
    return this._privKey.toString("base64");
  }

  /**
   *
   * @param value
   */
  static fromBase64(value: string) {
    const buffer = Buffer.from(value, "base64");
    return new PrivKeyEd25519(buffer);
  }

  toJSON() {
    return {
      key: this.toBase64(),
    };
  }

  static fromJSON(value: any) {
    return PrivKeyEd25519.fromBase64(value);
  }
}

/**
 * ed25519
 */
export class PubKeyEd25519 implements PubKey {
  static "@type": "/cosmos.crypto.ed25519.PubKey";
  "@type": "/cosmos.crypto.ed25519.PubKey";

  private _pubKey: Buffer;

  /**
   *
   * @param pubKey
   */
  constructor(pubKey: Buffer) {
    this._pubKey = pubKey;
  }

  pack() {
    const generated = new GeneratedPubKey();
    generated.setKey(this._pubKey);

    return codec.packAny(generated);
  }

  address() {
    const hash = crypto.createHash("sha256").update(this._pubKey).digest();
    return hash.subarray(0, 20);
  }

  /**
   *
   */
  bytes() {
    return Buffer.from(this._pubKey);
  }

  /**
   * message is not needed
   * @param sig
   */
  verifySignature(_: Buffer, sig: Buffer) {
    return (
      nacl.sign.open(new Uint8Array(sig), new Uint8Array(this._pubKey)) !== null
    );
  }

  /**
   *
   */
  toBase64() {
    return this._pubKey.toString("base64");
  }

  /**
   *
   */
  static fromBase64(value: string) {
    const buffer = Buffer.from(value, "base64");
    return new PubKeyEd25519(buffer);
  }

  toJSON() {
    return {
      key: this.toBase64(),
    };
  }

  static fromJSON(value: any) {
    return PubKeyEd25519.fromBase64(value);
  }
}
