import { PubKey, PrivKey } from "./crypto";

export class PubKeyEd25519 implements PubKey {
  public type = 'tendermint/PubKeyEd25519';
  public value: string;

  constructor(
    value: string
  ) {
    this.value = value;
  }
}

export class PrivKeyEd25519 implements PrivKey {
  public type = 'tendermint/PrivKeyEd25519';
  public value: string;

  constructor(
    value: string
  ) {
    this.value = value;
  }
}
