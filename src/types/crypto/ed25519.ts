import * as crypto from 'crypto';
import * as nacl from 'tweetnacl';
import { PrivKey as BasePrivKey, PubKey as BasePubKey } from './key';
import { cosmos } from '../../proto';

export class PrivKey extends cosmos.crypto.ed25519.PrivKey implements BasePrivKey {
  bytes() {
    return new Uint8Array(this.key);
  }

  sign(message: Uint8Array) {
    const keypair = nacl.sign.keyPair.fromSeed(this.key);
    return nacl.sign(new Uint8Array(message), new Uint8Array(keypair.secretKey));
  }

  pubKey() {
    const keypair = nacl.sign.keyPair.fromSeed(new Uint8Array(this.key));

    return new PubKey({ key: new Uint8Array(keypair.publicKey) });
  }
}

export class PubKey extends cosmos.crypto.ed25519.PubKey implements BasePubKey {
  bytes() {
    return new Uint8Array(this.key);
  }

  verify(_: Uint8Array, sig: Uint8Array) {
    return nacl.sign.open(new Uint8Array(sig), new Uint8Array(this.key)) !== null;
  }

  address() {
    const hash = crypto.createHash('sha256').update(this.key).digest();
    return new Uint8Array(hash.subarray(0, 20));
  }
}
