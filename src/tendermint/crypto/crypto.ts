import { Amino } from "../amino";

export interface PubKey extends Amino<string> {
  readonly pubKeyBuffer: Buffer;
  verify(message: string, signature: Buffer): boolean;
}

export interface PrivKey extends PubKey {
  readonly privKeyBuffer: Buffer;
  sign(message: string): Buffer;
}