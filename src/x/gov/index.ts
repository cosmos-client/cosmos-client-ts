import { MsgDeposit, MsgSubmitProposal, MsgVote, TextProposal } from "./types";
import { codec } from "../../codec";
import * as gov from "./module";

export { gov };
export * from "./types";

// Register codec
codec.registerCodec("cosmos-sdk/MsgDeposit", MsgDeposit, MsgDeposit.fromJSON);
codec.registerCodec(
  "cosmos-sdk/MsgSubmitProposal",
  MsgSubmitProposal,
  MsgSubmitProposal.fromJSON,
);
codec.registerCodec("cosmos-sdk/MsgVote", MsgVote, MsgVote.fromJSON);
codec.registerCodec(
  "cosmos-sdk/TextProposal",
  TextProposal,
  TextProposal.fromJSON,
);
