import { Amino } from "../amino";

export interface PubKey extends Amino<string> {
  getPubKeyBuffer(): Buffer;
  verify(message: string, signature: Buffer): boolean;
}

export interface PrivKey extends Amino<string> {
  getPubKey(): PubKey;
  getPrivKeyBuffer(): Buffer;
  sign(message: string): Buffer;
}