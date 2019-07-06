import { AccAddress } from "../../cosmos-sdk/address/acc-address";
import { Coin } from "../../cosmos-sdk/coin/coin";
import { PubKey } from "../../tendermint/crypto/crypto";

export interface BaseAccount {
  address: AccAddress;
  coins: Coin[];
  public_key: PubKey;
  account_number: bigint;
  sequence: bigint;
}