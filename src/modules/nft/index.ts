import {
  MsgTransferNFT,
  MsgEditNFTMetadata,
  MsgMintNFT,
  MsgBurnNFT,
} from "./types";
import { codec } from "../../codec";
import * as nft from "./module";

export { nft };
export * from "./types";

// Register codec
codec.registerCodec(
  "cosmos-sdk/MsgTransferNFT",
  MsgTransferNFT,
  MsgTransferNFT.fromJSON,
);
codec.registerCodec(
  "cosmos-sdk/MsgEditNFTMetadata",
  MsgEditNFTMetadata,
  MsgEditNFTMetadata.fromJSON,
);
codec.registerCodec("cosmos-sdk/MsgMintNFT", MsgMintNFT, MsgMintNFT.fromJSON);
codec.registerCodec("cosmos-sdk/MsgBurnNFT", MsgBurnNFT, MsgBurnNFT.fromJSON);
