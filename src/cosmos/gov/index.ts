import { MsgDeposit, MsgSubmitProposal, MsgVote, TextProposal } from "./types";
import { codec } from "../../codec";

// export * as gov from "./module";
import * as gov from "./module";
export { gov };
export * from "./types";

// Register codec
codec.registerCodec(
  MsgSubmitProposal["@type"],
  MsgSubmitProposal,
  MsgSubmitProposal.fromJSON,
);
codec.registerCodec(MsgDeposit["@type"], MsgDeposit, MsgDeposit.fromJSON);
codec.registerCodec(MsgVote["@type"], MsgVote, MsgVote.fromJSON);
codec.registerCodec(TextProposal["@type"], TextProposal, TextProposal.fromJSON);
