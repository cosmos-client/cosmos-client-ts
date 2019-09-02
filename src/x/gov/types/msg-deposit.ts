import { Amino } from "../../../common/amino";
import { Msg } from "../../../types/cosmos-sdk/msg";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { Coin } from "../../../types/cosmos-sdk/coin";

@Amino.RegisterConcrete('cosmos-sdk/MsgDeposit')
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
    * @param obj
    */
    public static fromJSON(obj: any) {
        return new this(
            obj.proposal_id,
            AccAddress.fromBech32(obj.depositer),
            obj.amount
        );
    }
}