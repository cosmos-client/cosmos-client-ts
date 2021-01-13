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
codec.register(
  "cosmos-sdk/MsgTransferNFT",
  MsgTransferNFT,
  MsgTransferNFT.fromJSON,
);
codec.register(
  "cosmos-sdk/MsgEditNFTMetadata",
  MsgEditNFTMetadata,
  MsgEditNFTMetadata.fromJSON,
);
codec.register("cosmos-sdk/MsgMintNFT", MsgMintNFT, MsgMintNFT.fromJSON);
codec.register("cosmos-sdk/MsgBurnNFT", MsgBurnNFT, MsgBurnNFT.fromJSON);
