import { Amino } from "../../../common/amino";
import { Msg } from "../../../types/cosmos-sdk/msg";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";

@Amino.RegisterConcrete('cosmos-sdk/MsgWithdrawValidatorCommission')
export class MsgWithdrawValidatorCommission implements Msg {
    /** 
    * @param validator_address
    */
    constructor(
        public validator_address: ValAddress
    ) { }
    /**
    * @see Amino.reviver
    */
   public static fromJSON(obj:any){
       return new this(
           ValAddress.fromBech32(obj.validator_address)
       );
   }
}