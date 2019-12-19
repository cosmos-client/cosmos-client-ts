export interface PubKey {
  toBuffer(): Buffer;
  toBase64(): string;
  verify(message: Buffer, signature: Buffer): boolean;
}
