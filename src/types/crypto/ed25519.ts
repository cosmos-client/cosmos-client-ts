import { cosmos } from '../../proto';
import { PrivKey as BasePrivKey, PubKey as BasePubKey } from './key';
import * as crypto from 'crypto';
import * as nacl from 'tweetnacl';

declare module '../../proto' {
  namespace cosmos {
    namespace crypto {
      namespace ed25519 {
        interface PrivKey extends BasePrivKey {}
        interface PubKey extends BasePubKey {}
      }
    }
  }
}

// PrivKey

cosmos.crypto.ed25519.PrivKey.prototype.bytes = function () {
  return new Uint8Array(this.key);
};

cosmos.crypto.ed25519.PrivKey.prototype.sign = function (message: Uint8Array) {
  const keypair = nacl.sign.keyPair.fromSeed(this.key);
  return nacl.sign(new Uint8Array(message), new Uint8Array(keypair.secretKey));
};

cosmos.crypto.ed25519.PrivKey.prototype.pubKey = function () {
  const keypair = nacl.sign.keyPair.fromSeed(new Uint8Array(this.key));

  return new cosmos.crypto.ed25519.PubKey({ key: new Uint8Array(keypair.publicKey) });
};

// PubKey

cosmos.crypto.ed25519.PubKey.prototype.bytes = function () {
  return new Uint8Array(this.key);
};

cosmos.crypto.ed25519.PubKey.prototype.verify = function (_: Uint8Array, sig: Uint8Array) {
  return nacl.sign.open(new Uint8Array(sig), new Uint8Array(this.key)) !== null;
};

cosmos.crypto.ed25519.PubKey.prototype.address = function () {
  const hash = crypto.createHash('sha256').update(this.key).digest();
  return new Uint8Array(hash.subarray(0, 20));
};
