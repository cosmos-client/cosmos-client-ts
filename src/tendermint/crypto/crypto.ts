export interface PubKey {
  address(): Uint8Array;
  bytes(): Uint8Array;
  verifyBytes(msg: Uint8Array, sig: Uint8Array): boolean;
  equals(pubKey: PubKey): boolean;
}

export interface PrivKey {
  bytes(): Uint8Array;
  sign(msg: Uint8Array): [Uint8Array, Error];
  pubKey(): PubKey;
  equals(privKey: PrivKey): boolean;
}
