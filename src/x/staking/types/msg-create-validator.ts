import { Msg } from "../../../types/cosmos-sdk/msg";
import { description } from "./description";
import { commissionRates } from "./commission-rates";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";
import { PubKey } from "../../../types/tendermint/pub-key";
import { Coin } from "../../../types/cosmos-sdk/coin";

export class MsgCreateValidator implements Msg {
    /**
     * @param description
     * @param commission
     * @param min_self_delegation
     * @param delegator_address
     * @param validator_address
     * @param pubkey
     * @param value
     */
    constructor(
        public description: description,
        public commission: commissionRates,
        public min_self_delegation: number,
        public delegator_address: AccAddress,
        public validator_address: ValAddress,
        public publey: PubKey,
        public value: Coin
    ) { }
    /**
     * @see Amino.reviver
     * @param obj
     */
    public static fromJSON(obj: any) {
        return new this(
            obj.description,
            obj.commission,
            obj.min_self_delegation,
            AccAddress.fromBech32(obj.delegator_address),
            ValAddress.fromBech32(obj.validator_address),
            obj.pubkey,
            obj.value
        );
    }
}