import { Amino } from "../../../common/amino";
import { Msg } from "../../../types/cosmos-sdk/msg";

@Amino.RegisterConcrete('cosmos-sdk/MsgWithdrawValidatorCommission')
export class MsgWithdrawValidatorCommission implements Msg {

}