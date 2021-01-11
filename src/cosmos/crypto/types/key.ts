import { Any } from "../../types/any";

export type PubKey = Any & {
  address(): Buffer;
  bytes(): Buffer;
  verifySignature(msg: Buffer, sig: Buffer): boolean;
};

export type PrivKey = Any & {
  bytes(): Buffer;
  sign(message: Buffer): Buffer;
  pubKey(): PubKey;
};
