import { AnyI } from "../../../codec/any";

export type PubKey = AnyI & {
  address(): Buffer;
  bytes(): Buffer;
  verifySignature(msg: Buffer, sig: Buffer): boolean;
};

export type PrivKey = AnyI & {
  bytes(): Buffer;
  sign(message: Buffer): Buffer;
  pubKey(): PubKey;
};
