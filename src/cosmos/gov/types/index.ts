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
codec.registerCodec(
  MsgSubmitProposal["@type"],
  MsgSubmitProposal,
  MsgSubmitProposal.fromJSON,
);
codec.registerCodec(MsgDeposit["@type"], MsgDeposit, MsgDeposit.fromJSON);
codec.registerCodec(MsgVote["@type"], MsgVote, MsgVote.fromJSON);
codec.registerCodec(TextProposal["@type"], TextProposal, TextProposal.fromJSON);
