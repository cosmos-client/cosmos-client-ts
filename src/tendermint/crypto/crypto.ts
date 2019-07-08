export interface PubKey {
  toString(): string;
  verify(message: string, signature: Buffer): boolean;
}

export interface PrivKey {
  getPubKey(): PubKey;
  toString(): string;
  sign(message: string): Buffer;
}