import { Amino } from "../../../common/amino";
import { Msg } from "../../../types/cosmos-sdk/msg";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";
import { ValAddress } from "../../../types/cosmos-sdk/address/val-address";

@Amino.RegisterConcrete('cosmos-sdk/MsgWithdrawDelegationReward')
export class MsgWithdrawDelegationReward implements Msg {
   
}