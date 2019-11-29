import { Amino } from "../../../common/amino";
import { MsgDeposit } from "./msg-deposit";
import { MsgSubmitProposal } from "./msg-submit-proposal";
import { MsgVote } from "./msg-vote";
import { SoftwareUpgradeProposal } from "./software-upgrade-proposal";
import { TextProposal } from "./text-proposal";

Amino.RegisterConcrete('cosmos-sdk/MsgDeposit', MsgDeposit);
Amino.RegisterConcrete('cosmos-sdk/MsgSubmitProposal', MsgSubmitProposal);
Amino.RegisterConcrete('cosmos-sdk/MsgVote', MsgVote);
Amino.RegisterConcrete('cosmos-sdk/SoftwareUpgradeProposal', SoftwareUpgradeProposal)
Amino.RegisterConcrete('cosmos-sdk/TextProposal', TextProposal);
