import { Coin } from "../../cosmos-sdk/coin/coin";
import { PubKey } from "../../tendermint/crypto/crypto";
import { AccAddress } from "../../cosmos-sdk/address";

export class BaseAccount {
  address: AccAddress;
  coins: Coin[];
  public_key: PubKey;
  account_number: bigint;
  sequence: bigint;

  constructor(
    address: AccAddress,
    coins: Coin[],
    pubKey: PubKey,
    accountNumber: bigint,
    sequence: bigint
  ) {
    this.address = address;
    this.coins = coins;
    this.public_key = pubKey;
    this.account_number = accountNumber;
    this.sequence = sequence;
  }
}