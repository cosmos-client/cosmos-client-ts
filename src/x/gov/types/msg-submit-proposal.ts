import { Amino } from "../../../common/amino";
import { Msg } from "../../../types/cosmos-sdk/msg";

@Amino.RegisterConcrete('cosmos-sdk/MsgSubmitProposal')
export class MsgSubmitProposal implements Msg {

}