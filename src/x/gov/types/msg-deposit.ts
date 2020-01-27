import { Msg } from "../../../types/cosmos-sdk/msg";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { Coin } from "../../../types/cosmos-sdk/coin";

export class MsgDeposit implements Msg {
    /**
    * @param proposal_id
    * @param depositor
    * @param amount
    */
    constructor(
        public proposal_id: number,
        public depositor: AccAddress,
        public amount: Coin[]
    ) { }

    /**
    * @see amino.reviver
    * @param value
    */
    public static fromJSON(value: any) {
        return new this(
            value.proposal_id,
            AccAddress.fromBech32(value.depositer),
            value.amount
        );
    }
}