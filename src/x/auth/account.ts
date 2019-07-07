import { Coin } from "../../cosmos-sdk/coin/coin";
import { PubKey } from "../../tendermint/crypto/crypto";
import { AccAddress } from "../../cosmos-sdk/address";
import { AminoRegisteredConcrete } from "../../tendermint/amino";

export class BaseAccount implements AminoRegisteredConcrete {
  public readonly type = 'auth/Account';
  public value: {
    address: AccAddress;
    coins: Coin[];
    public_key: PubKey;
    account_number: bigint;
    sequence: bigint;
  }

  constructor(
    address: AccAddress,
    coins: Coin[],
    public_key: PubKey,
    account_number: bigint,
    sequence: bigint
  ) {
    this.value = {
      address: address,
      coins: coins,
      public_key: public_key,
      account_number: account_number,
      sequence: sequence
    };
  }
}