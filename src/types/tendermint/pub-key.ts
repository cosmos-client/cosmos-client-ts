export interface PubKey {
  toBuffer(): Buffer;
  toBase64(): string;
  verify(message: string, signature: Buffer): boolean;
}
