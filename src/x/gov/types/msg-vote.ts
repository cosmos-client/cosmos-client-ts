import { Msg } from "../../../types/cosmos-sdk/msg";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { VoteOption } from "./vote-option";

export class MsgVote implements Msg {
    /**
    * @param proposal_id
    * @param voter
    * @param option
    */
    constructor(
        public proposal_id: number,
        public voter: AccAddress,
        public option: VoteOption
    ) { }

    /**
    * @see Amino.reviver
    * @param obj
    */
    public static fromJSON(obj: any) {
        return new this(
            obj.proposal_id,
            AccAddress.fromBech32(obj.voter),
            obj.option
        );
    }
}