import { Amino } from "../../../common/amino";
import { Msg } from "../../../types/cosmos-sdk/msg";

@Amino.RegisterConcrete('cosmos-sdk/MsgBeginRedelegate')
export class MsgBeginRedelegate implements Msg {

}