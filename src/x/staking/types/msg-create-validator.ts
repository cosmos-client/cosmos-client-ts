import { Amino } from "../../../common/amino";
import { Msg } from "../../../types/cosmos-sdk/msg";

@Amino.RegisterConcrete('cosmos-sdk/MsgCreateValidator')
export class MsgCreateValidator implements Msg {

}