import { Amino } from "../../../common/amino";
import { Msg } from "../../../types/cosmos-sdk/msg";

@Amino.RegisterConcrete('cosmos-sdk/MsgDelegate')
export class MsgDelegate implements Msg {

}