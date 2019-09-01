import { Amino } from "../../../common/amino";
import { Msg } from "../../../types/cosmos-sdk/msg";

@Amino.RegisterConcrete('cosmos-sdk/MsgWithdrawDelegationReward')
export class MsgWithdrawDelegationReward implements Msg {

}