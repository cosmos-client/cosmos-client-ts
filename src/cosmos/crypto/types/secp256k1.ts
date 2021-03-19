import * as crypto from 'crypto';
import * as secp256k1 from 'tiny-secp256k1';
import { PrivKey as BasePrivKey, PubKey as BasePubKey } from './key';
import { cosmos } from '../../../proto';

export class PrivKey extends cosmos.crypto.secp256k1.PrivKey implements BasePrivKey {
  bytes() {
    return new Uint8Array(this.key);
  }

  sign(message: Uint8Array) {
    const hash = crypto.createHash('sha256').update(message).digest();
    const signature = secp256k1.sign(hash, Buffer.from(this.key));

    return new Uint8Array(signature);
  }

  pubKey() {
    return new PubKey({
      key: new Uint8Array(secp256k1.pointFromScalar(Buffer.from(this.key))!),
    });
  }
}

export class PubKey extends cosmos.crypto.secp256k1.PubKey implements BasePubKey {
  bytes() {
    return new Uint8Array(this.key);
  }

  verify(msg: Uint8Array, sig: Uint8Array) {
    const hash = crypto.createHash('sha256').update(msg).digest();

    return secp256k1.verify(hash, Buffer.from(sig), Buffer.from(this.key));
  }

  address() {
    return new Uint8Array(this.hash160(this.key));
  }

  private hash160(buffer: Uint8Array) {
    const sha256Hash: Buffer = crypto.createHash('sha256').update(buffer).digest();
    try {
      return crypto.createHash('rmd160').update(sha256Hash).digest();
    } catch (err) {
      return crypto.createHash('ripemd160').update(sha256Hash).digest();
    }
  }
}
