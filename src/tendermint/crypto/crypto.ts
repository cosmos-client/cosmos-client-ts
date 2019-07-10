export interface PubKey {
  toBuffer(): Buffer;
  toBase64(): string;
  verify(message: string, signature: Buffer): boolean;
}

export interface PrivKey {
  getPubKey(): PubKey;
  toBuffer(): Buffer;
  toBase64(): string;
  sign(message: string): Buffer;
}