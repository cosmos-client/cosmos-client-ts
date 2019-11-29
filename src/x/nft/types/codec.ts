import { Amino } from "../../../common/amino";
import { MsgTransferNFT } from "./msg-transfer-nft";

Amino.RegisterConcrete('cosmos-sdk/MsgTransferNFT', MsgTransferNFT);
