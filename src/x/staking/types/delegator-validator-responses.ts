import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";
import { PubKey } from "../../../types/tendermint/pub-key";
import { Dec } from "../../../types/cosmos-sdk/decimal";

export interface Validator {
    operator_address: ValAddress
    consensus_pubkey: PubKey
    jailed: boolean
    status: BondStatus
    tokens: Int16Array
    delegator_shares: Dec
    description: Description
    unbondingHeight: Int32Array
    unbondingCompletionTime: Time
    commission: Commition
    min_self_delegation: Int16Array
}