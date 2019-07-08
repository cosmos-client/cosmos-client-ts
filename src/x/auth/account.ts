import { Coin } from "../../cosmos-sdk/coin/coin";
import { PubKey } from "../../tendermint/crypto/crypto";
import { AccAddress } from "../../cosmos-sdk/address";
import { AminoRegisterConcrete } from "../../tendermint/amino";

@AminoRegisterConcrete('auth/Account')
export class BaseAccount {
  constructor(
    public address: AccAddress,
    public coins: Coin[],
    public public_key: PubKey,
    public account_number: bigint,
    public sequence: bigint
  ) {
    
  }
}