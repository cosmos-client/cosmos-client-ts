import * as crypto from "crypto";
import * as secp256k1 from "tiny-secp256k1";
import { PrivKey as BasePrivKey, PubKey as BasePubKey } from "./key";
import { cosmos } from "../../../proto";

export const PrivKey = cosmos.crypto.secp256k1.PrivKey;
export const PubKey = cosmos.crypto.secp256k1.PubKey;

declare module "../../../proto" {
  namespace cosmos {
    namespace crypto {
      namespace secp256k1 {
        export interface PrivKey extends BasePrivKey { }
      }
    }
  }
}

cosmos.crypto.secp256k1.PrivKey.prototype.bytes = function () {
  return Buffer.from(this.key);
};

cosmos.crypto.secp256k1.PrivKey.prototype.sign = function (
  message: Uint8Array,
) {
  const hash = crypto.createHash("sha256").update(message).digest();
  const signature = secp256k1.sign(hash, Buffer.from(this.key));

  return signature;
};

cosmos.crypto.secp256k1.PrivKey.prototype.pubKey = function () {
  return new cosmos.crypto.secp256k1.PubKey({
    key: secp256k1.pointFromScalar(Buffer.from(this.key))!,
  });
};

declare module "../../../proto" {
  namespace cosmos {
    namespace crypto {
      namespace secp256k1 {
        export interface PubKey extends BasePubKey { }
      }
    }
  }
}

cosmos.crypto.secp256k1.PubKey.prototype.bytes = function () {
  return Buffer.from(this.key);
};

cosmos.crypto.secp256k1.PubKey.prototype.verify = function (
  msg: Uint8Array,
  sig: Uint8Array,
) {
  const hash = crypto.createHash("sha256").update(msg).digest();

  return secp256k1.verify(hash, Buffer.from(sig), Buffer.from(this.key));
};

cosmos.crypto.secp256k1.PubKey.prototype.address = function () {
  return hash160(this.key);
};

function hash160(buffer: Uint8Array): Uint8Array {
  const sha256Hash: Buffer = crypto
    .createHash("sha256")
    .update(buffer)
    .digest();
  try {
    return crypto.createHash("rmd160").update(sha256Hash).digest();
  } catch (err) {
    return crypto.createHash("ripemd160").update(sha256Hash).digest();
  }
}
