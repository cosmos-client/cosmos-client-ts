export type PrivKey = {
  bytes(): Uint8Array;
  sign(msg: Uint8Array): Uint8Array;
  pubKey(): PubKey;
};

export type PubKey = {
  bytes(): Uint8Array;
  verify(msg: Uint8Array, sig: Uint8Array): boolean;
  address(): Uint8Array;
};
