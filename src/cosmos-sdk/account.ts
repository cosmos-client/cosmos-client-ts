import { AccAddress } from "./address/acc-address";
import { PubKey } from "../tendermint/crypto/crypto";
import { Coin } from "./coin/coin";

export interface Account {
  getAddress(): AccAddress;
  getPubKey(): PubKey;
  getAccountNumber(): bigint;
  getSequence(): bigint;
  getCoins(): Coin[];
}