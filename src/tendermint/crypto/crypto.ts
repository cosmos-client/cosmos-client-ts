export interface PubKey {
  toBase64(): string;
  verify(message: string, signature: Buffer): boolean;
}

export interface PrivKey {
  getPubKey(): PubKey;
  toBase64(): string;
  sign(message: string): Buffer;
}