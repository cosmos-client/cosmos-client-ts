import { AminoRegisteredConcrete } from "../amino";

export interface PubKey extends AminoRegisteredConcrete {
  getPubKeyBuffer(): Buffer;
  verify(message: string, signature: Buffer): boolean;
}

export interface PrivKey extends AminoRegisteredConcrete {
  getPubKey(): PubKey;
  getPrivKeyBuffer(): Buffer;
  sign(message: string): Buffer;
}