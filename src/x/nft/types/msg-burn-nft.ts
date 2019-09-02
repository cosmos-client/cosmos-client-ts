import { Msg } from "../../../types/cosmos-sdk/msg";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";

export class MsgBurnNFT implements Msg {
  /**
   * @param sender
   * @param id
   * @param denom
   */
    constructor(
        public sender: AccAddress,
        public id: string,
        public denom: string
    ){ }

    /**
    * @see Amino.reviver
    * @param obj
    */
    public static fromJSON(obj: any) {
        return new this(
            AccAddress.fromBech32(obj.sender),
            obj.id,
            obj.denom
        );
    }
}