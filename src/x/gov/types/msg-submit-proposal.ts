import { Msg } from "../../../types/cosmos-sdk/msg";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { Content } from "./content";
import { Coin } from "../../../types/cosmos-sdk/coin";

export class MsgSubmitProposal implements Msg {
    /** 
    * @param content
    * @param initial_deposit
    * @param proposer
    */
    constructor(
        public content: Content,
        public initial_deposit: Coin[],
        public proposer: AccAddress
    ) { }

    /**
    * @see Amino.reviver
    * @param obj
    */
    public static fromJSON(obj: any) {
        return new this(
            obj.content,
            obj.initial_deposit,
            AccAddress.fromBech32(obj.proposer)
        );
    }
}