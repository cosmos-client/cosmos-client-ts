import { StdTx } from "../../x/auth";
import { CosmosSDK } from "../../cosmos-sdk";
import { AccAddress } from "../../types";
import {
  TransferNFTReq,
  EditNFTMetadataReq,
  MintNFTReq,
  BurnNFTReq
} from "./types";

export function getSupply(sdk: CosmosSDK, denom: string) {
  return sdk.get<{}>(`/nft/supply/${denom}`, denom);
}

export function getOwner(sdk: CosmosSDK, delegatorAddr: AccAddress) {
  return sdk.get<{}>(`/nft/owner/${delegatorAddr}`, delegatorAddr);
}

export function getOwnerByDenom(
  sdk: CosmosSDK,
  delegatorAddr: AccAddress,
  denom: string
) {
  return sdk.get<{}>(
    `/nft/owner/${delegatorAddr}/collection/${denom}`,
    delegatorAddr
  );
}

export function getCollection(sdk: CosmosSDK, denom: string) {
  return sdk.get<{}>(`/nft/collection/${denom}`, denom);
}

export function getDenoms(sdk: CosmosSDK) {
  return sdk.get<{}>(`/nft/denoms`);
}

export function getNFT(sdk: CosmosSDK, denom: string, id: string) {
  return sdk.get<{}>(`/nft/collection/${denom}/nft/${id}`);
}

export function postTransferNFT(
  sdk: CosmosSDK,
  transferNFTReq: TransferNFTReq
) {
  return sdk.post<StdTx>("/nfts/transfer", transferNFTReq);
}

export function postEditNFTMetadata(
  sdk: CosmosSDK,
  editNFTMetadataReq: EditNFTMetadataReq
) {
  return sdk.post<StdTx>(
    `/nfts/collection/${editNFTMetadataReq.denom}/nft/${editNFTMetadataReq.id}/metadata`,
    editNFTMetadataReq
  );
}

export function postMintNFT(sdk: CosmosSDK, mintNFTReq: MintNFTReq) {
  return sdk.post<StdTx>(`/nfts/mint`, mintNFTReq);
}

export function putBurnNFT(sdk: CosmosSDK, burnNFTReq: BurnNFTReq) {
  return sdk.put<StdTx>(
    `/nfts/collection/${burnNFTReq.denom}/nft/${burnNFTReq.id}/burn`,
    burnNFTReq
  );
}
