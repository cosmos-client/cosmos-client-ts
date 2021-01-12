import { codec } from "../../../codec";
import { MsgDeposit } from "./msg-deposit";
import { MsgSubmitProposal } from "./msg-submit-proposal";
import { MsgVote } from "./msg-vote";
import { TextProposal } from "./text-proposal";

export * from "./msg-deposit";
export * from "./msg-submit-proposal";
export * from "./msg-vote";
export * from "./text-proposal";

// Register codec
codec.register(
  MsgSubmitProposal["@type"],
  MsgSubmitProposal,
  MsgSubmitProposal.fromJSON,
);
codec.register(MsgDeposit["@type"], MsgDeposit, MsgDeposit.fromJSON);
codec.register(MsgVote["@type"], MsgVote, MsgVote.fromJSON);
codec.register(TextProposal["@type"], TextProposal, TextProposal.fromJSON);
