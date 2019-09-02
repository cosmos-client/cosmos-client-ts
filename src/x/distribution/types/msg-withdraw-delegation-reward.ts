import { Amino } from "../../../common/amino";
import { Msg } from "../../../types/cosmos-sdk/msg";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";

@Amino.RegisterConcrete('cosmos-sdk/MsgWithdrawDelegationReward')
export class MsgWithdrawDelegationReward implements Msg {
    /**
     * 
     * @param delegator_address
     * @param validator_address
     */
    constructor(
        public delegator_address: AccAddress,
        public validator_address: ValAddress
    ) { }
    /**
    * @see Amino.reviver
    */
   public static fromJSON(obj:any){
       return new this(
           AccAddress.fromBech32(obj.delegator_address),
           ValAddress.fromBech32(obj.validator_address)
       );
   }
}