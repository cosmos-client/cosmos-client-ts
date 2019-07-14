import { PubKey } from "./pub-key";

export interface PrivKey {
  getPubKey(): PubKey;
  toBuffer(): Buffer;
  toBase64(): string;
  sign(message: string): Buffer;
}