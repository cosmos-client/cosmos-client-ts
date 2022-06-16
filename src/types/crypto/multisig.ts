import { cosmos } from '../../proto';
import { codec } from '../codec';
import { PubKey as BasePubKey } from './key';
import * as crypto from 'crypto';

/* eslint-disable no-unused-vars */
declare module '../../proto' {
  namespace cosmos {
    namespace crypto {
      namespace multisig {
        interface LegacyAminoPubKey extends BasePubKey {}
      }
    }
  }
}
/* eslint-enable */

function encodeUvarint(value: number) {
  if (!Number.isInteger(value)) {
    throw Error('Not integer');
  }
  if (value < 0) {
    throw Error('The value must be unsigned');
  }
  if (value > 127) {
    throw Error('The value greater than 127 is not supported');
  }
  return new Uint8Array([value]);
}

function encodeAminoPubkey(pubkey: BasePubKey) {
  if (pubkey instanceof cosmos.crypto.ed25519.PubKey) {
    return new Uint8Array([0x16, 0x24, 0xde, 0x64, 0x20, ...pubkey.key]);
  } else if (pubkey instanceof cosmos.crypto.secp256k1.PubKey) {
    return new Uint8Array([0xeb, 0x5a, 0xe9, 0x87, 0x21, ...pubkey.key]);
  } else if (pubkey instanceof cosmos.crypto.multisig.LegacyAminoPubKey) {
    const array: number[] = [];
    array.push(...[0x22, 0xc1, 0xf7, 0xe2]);
    array.push(0x08); // TODO: What is this?
    array.push(...encodeUvarint(pubkey.threshold));

    for (const keyData of pubkey.public_keys.map((key) => encodeAminoPubkey(codec.protoAnyToInstance(key) as BasePubKey))) {
      array.push(0x12); // TODO: What is this?
      array.push(...encodeUvarint(keyData.length));
      array.push(...keyData);
    }

    return new Uint8Array(array);
  }

  throw Error('Unsupported type for multisig key');
}

cosmos.crypto.multisig.LegacyAminoPubKey.prototype.bytes = function () {
  return encodeAminoPubkey(this);
};

cosmos.crypto.multisig.LegacyAminoPubKey.prototype.verify = function (_: Uint8Array, sig: Uint8Array) {
  throw Error('Not implemented');
};

cosmos.crypto.multisig.LegacyAminoPubKey.prototype.address = function () {
  const hash = crypto.createHash('sha256').update(this.bytes()).digest();
  return new Uint8Array(hash.subarray(0, 20));
};

cosmos.crypto.multisig.LegacyAminoPubKey.prototype.accPubkey = function () {
  throw Error('Not implemented');
};
