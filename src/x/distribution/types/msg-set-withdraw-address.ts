import { Msg } from "../../../types/cosmos-sdk/msg";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";

export class MsgSetWithdrawAddress implements Msg {
    /**
     * @param delegator_address
     * @param withdraw_address
     */
    constructor(
        public delegator_address: AccAddress,
        public withdraw_address: AccAddress
    ) { }

    /**
    * @see Amino.reviver
    */
    public static fromJSON(obj: any) {
        return new this(
            AccAddress.fromBech32(obj.delegator_address),
            AccAddress.fromBech32(obj.withdraw_address));
    }
}