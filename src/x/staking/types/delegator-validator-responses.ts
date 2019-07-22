import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";
import { PubKey } from "../../../types/tendermint/pub-key";
import { Dec } from "../../../types/cosmos-sdk/decimal";

export interface Validator {
    OperatorAddress: ValAddress
    ConsPubkey: PubKey
    Jailed: boolean
    Status: BondStatus
    Tokens: Int16Array
    DelegatorShares: Dec
    Description: Description
    UnbondingHeight: Int32Array
    UnbondingCompletionTime: Time
    Commission: Commition
    MinSelfDelegation: Int16Array
}