import { Amino } from "../../../common/amino";
import { CommunityPoolSpendProposal } from "./community-pool-spend-proposal";
import { MsgSetWithdrawAddress } from "./msg-set-withdraw-address";
import { MsgWithdrawValidatorCommission } from "./msg-withdraw-validator-commision";

Amino.RegisterConcrete('cosmos-sdk/CommunityPoolSpendProposal', CommunityPoolSpendProposal);
Amino.RegisterConcrete('cosmos-sdk/MsgModifyWithdrawAddress', MsgSetWithdrawAddress);
Amino.RegisterConcrete('cosmos-sdk/MsgWithdrawValidatorCommission', MsgWithdrawValidatorCommission);
