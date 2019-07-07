import { PubKey, PrivKey } from "./crypto";

export class PubKeySecp256k1 implements PubKey {
  public type = 'tendermint/PubKeySecp256k1';

  constructor(
    public value: string
  ) {

  }
}

export class PrivKeySecp256k1 implements PrivKey {
  public type = 'tendermint/PrivKeySecp256k1';

  constructor(
    public value: string
  ) {
    
  }
}
