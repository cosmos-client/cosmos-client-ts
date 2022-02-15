import { config } from '../../config/';
import { cosmos } from '../../proto';
import { PrivKey as BasePrivKey, PubKey as BasePubKey } from './key';
import * as bech32 from 'bech32';
import * as crypto from 'crypto';
import * as secp256k1 from 'secp256k1';

declare module '../../proto' {
  namespace cosmos {
    namespace crypto {
      namespace secp256k1 {
        interface PrivKey extends BasePrivKey {}
        interface PubKey extends BasePubKey {}
      }
    }
  }
}

// PrivKey

cosmos.crypto.secp256k1.PrivKey.prototype.bytes = function () {
  return this.key;
};

cosmos.crypto.secp256k1.PrivKey.prototype.sign = function (message: Uint8Array) {
  const hash = crypto.createHash('sha256').update(message).digest();
  const signature = secp256k1.ecdsaSign(hash, this.key).signature;

  return signature;
};

cosmos.crypto.secp256k1.PrivKey.prototype.pubKey = function () {
  return new cosmos.crypto.secp256k1.PubKey({
    key: secp256k1.publicKeyCreate(this.key),
  });
};

// PubKey

cosmos.crypto.secp256k1.PubKey.prototype.bytes = function () {
  return this.key;
};

cosmos.crypto.secp256k1.PubKey.prototype.verify = function (msg: Uint8Array, sig: Uint8Array) {
  const hash = crypto.createHash('sha256').update(msg).digest();

  return secp256k1.ecdsaVerify(sig, new Uint8Array(hash), this.key);
};

cosmos.crypto.secp256k1.PubKey.prototype.address = function () {
  return new Uint8Array(hash160(this.key));
};

cosmos.crypto.secp256k1.PubKey.prototype.accPubkey = function () {
  const prefix = new Uint8Array([235, 90, 233, 135, 33]);
  let mergedKey = new Uint8Array(prefix.length + this.key.length);
  mergedKey.set(prefix);
  mergedKey.set(this.key, prefix.length);
  const words = bech32.toWords(Buffer.from(mergedKey));
  return bech32.encode(config.bech32Prefix.accPub, words);
};

function hash160(buffer: Uint8Array) {
  const sha256Hash: Buffer = crypto.createHash('sha256').update(buffer).digest();
  try {
    return crypto.createHash('rmd160').update(sha256Hash).digest();
  } catch (err) {
    return crypto.createHash('ripemd160').update(sha256Hash).digest();
  }
}
