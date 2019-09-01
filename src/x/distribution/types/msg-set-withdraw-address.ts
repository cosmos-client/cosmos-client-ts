import { Amino } from "../../../common/amino";
import { Msg } from "../../../types/cosmos-sdk/msg";

@Amino.RegisterConcrete('cosmos-sdk/MsgModifyWithdrawAddress')
export class MsgSetWithdrawAddress implements Msg {

}