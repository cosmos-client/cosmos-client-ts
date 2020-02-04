import { MsgTransferNFT } from "./types";
import { codec } from "../../codec";
import * as nft from "./module";

export { nft };
export * from "./types";

// Register codec
codec.registerCodec(
  "cosmos-sdk/MsgTransferNFT",
  MsgTransferNFT,
  MsgTransferNFT.fromJSON
);
