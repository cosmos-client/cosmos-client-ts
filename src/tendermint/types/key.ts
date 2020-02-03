export interface PrivKey {
  getPubKey(): PubKey;
  toBuffer(): Buffer;
  toBase64(): string;
  sign(message: Buffer): Buffer;
}

export interface PubKey {
  toBuffer(): Buffer;
  toBase64(): string;
  verify(message: Buffer, signature: Buffer): boolean;
}
