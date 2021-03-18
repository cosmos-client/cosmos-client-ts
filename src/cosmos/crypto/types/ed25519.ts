import * as crypto from "crypto";
import * as nacl from "tweetnacl";
import { PrivKey as BasePrivKey, PubKey as BasePubKey } from "./key";
import { cosmos } from "../../../proto";

export const PrivKey = cosmos.crypto.ed25519.PrivKey;
export const PubKey = cosmos.crypto.ed25519.PubKey;

declare module "../../../proto" {
  namespace cosmos {
    namespace crypto {
      namespace ed25519 {
        export interface PrivKey extends BasePrivKey { }
      }
    }
  }
}

cosmos.crypto.ed25519.PrivKey.prototype.bytes = function () {
  return Buffer.from(this.key);
};

cosmos.crypto.ed25519.PrivKey.prototype.sign = function (message: Uint8Array) {
  const keypair = nacl.sign.keyPair.fromSeed(this.key);
  return Buffer.from(
    nacl.sign(new Uint8Array(message), new Uint8Array(keypair.secretKey)),
  );
};

cosmos.crypto.ed25519.PrivKey.prototype.pubKey = function () {
  const keypair = nacl.sign.keyPair.fromSeed(this.key);

  return new cosmos.crypto.ed25519.PubKey({ key: keypair.publicKey });
};

declare module "../../../proto" {
  namespace cosmos {
    namespace crypto {
      namespace ed25519 {
        export interface PubKey extends BasePubKey { }
      }
    }
  }
}

cosmos.crypto.ed25519.PubKey.prototype.bytes = function () {
  return Buffer.from(this.key);
};

cosmos.crypto.ed25519.PubKey.prototype.verify = function (
  _: Uint8Array,
  sig: Uint8Array,
) {
  return nacl.sign.open(new Uint8Array(sig), new Uint8Array(this.key)) !== null;
};

cosmos.crypto.ed25519.PubKey.prototype.address = function () {
  const hash = crypto.createHash("sha256").update(this.key).digest();
  return hash.subarray(0, 20);
};
