import { Msg } from "../../../types/cosmos-sdk/msg";
import { description } from "./description";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";
import { commissionRates } from "./commission-rates";

export class MsgEditValidator implements Msg {
    /**
     * @param description
     * @param address
     * @param commission_rate
     * @param min_self_delegation
     */
    constructor(
        public descriiption: description,
        public address: ValAddress,
        public committion_rate: commissionRates,
        public min_self_delegation: number
    ) { }
    /**
        * @see Amino.reviver
        * @param obj
        */
    public static fromJSON(obj: any) {
        return new this(
            obj.description,
            ValAddress.fromBech32(obj.validator_address),
            obj.commission_rate,
            obj.min_self_delegation
        );
    }
}