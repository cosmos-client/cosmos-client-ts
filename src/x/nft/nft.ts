import { CosmosSDK } from "../..";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";
import { StdTx } from "../auth/types/std-tx";
import { TransferNFTReq } from "./types/transfer-nft-req";
import { EditNFTMetadataReq } from "./types/edit-nft-metadata-req";
import { MintNFTReq } from "./types/mint-nft-req";
import { BurnNFTReq } from "./types/burn-nft-req";
import { MsgTransferNFT } from "./types/msg-transfer-nft";
import { MsgEditNFTMetadata } from "./types/msg-edit-nft-metadata";
import { MsgMintNFT } from "./types/msg-mint-nft";
import { MsgBurnNFT } from "./types/msg-burn-nft";

export module Nft {
  /**
   * 
   */

  export function getSupply(host: CosmosSDK, denom: string) {
    return host.get<{}>(`/nft/supply/${denom}`, denom);
  }

  export function getOwner(host: CosmosSDK, delegatorAddr: AccAddress) {
    return host.get<{}>(`/nft/owner/${delegatorAddr}`, delegatorAddr);
  }

  export function getOwnerByDenom(
    host: CosmosSDK,
    delegatorAddr: AccAddress,
    denom: string
  ) {
    return host.get<{}>(
      `/nft/owner/${delegatorAddr}/collection/${denom}`,
      delegatorAddr
    );
  }

  export function getCollection(host: CosmosSDK, denom: string) {
    return host.get<{}>(`/nft/collection/${denom}`, denom);
  }

  export function getDenoms(host: CosmosSDK) {
    return host.get<{}>(`/nft/denoms`);
  }

  export function getNFT(host: CosmosSDK, denom: string, id: string) {
    return host.get<{}>(`/nft/collection/${denom}/nft/${id}`);
  }

  export function postTransferNFT(
    host: CosmosSDK,
    transferNFTReq: TransferNFTReq
  ) {
    return host.post<StdTx>("/nfts/transfer", transferNFTReq);
  }

  export function postEditNFTMetadata(
    host: CosmosSDK,
    editNFTMetadataReq: EditNFTMetadataReq
  ) {
    return host.post<StdTx>(
      `/nfts/collection/${editNFTMetadataReq.denom}/nft/${editNFTMetadataReq.id}/metadata`,
      editNFTMetadataReq
    );
  }

  export function postMintNFT(host: CosmosSDK, mintNFTReq: MintNFTReq) {
    return host.post<StdTx>(`/nfts/mint`, mintNFTReq);
  }

  export function putBurnNFT(host: CosmosSDK, burnNFTReq: BurnNFTReq) {
    return host.put<StdTx>(
      `/nfts/collection/${burnNFTReq.denom}/nft/${burnNFTReq.id}/burn`,
      burnNFTReq
    );
  }
}
