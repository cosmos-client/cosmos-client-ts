import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";
import { StdTx } from "../auth/types/stdtx";
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
     * @param host 
     */

    export function getSupply(host: CosmosSdkHost, denom: string) {
        return host.get<{}>(`/nft/supply/${denom}`, denom)
    }

    export function getOwner(host: CosmosSdkHost, delegatorAddr: AccAddress){
        return host.get<{}>(`/nft/owner/${delegatorAddr}`, delegatorAddr)
    }

    export function getOwnerByDenom(host: CosmosSdkHost, delegatorAddr: AccAddress, denom: string){
        return host.get <{}> (`/nft/owner/${delegatorAddr}/collection/${denom}`, delegatorAddr)
    }

    export function getCollection(host: CosmosSdkHost, denom: string){
        return host.get<{}>(`/nft/collection/${denom}`, denom)
    }

    export function getDenoms(host: CosmosSdkHost){
        return host.get<{}>(`/nft/denoms`)
    }

    export function getNFT(host: CosmosSdkHost, denom: string, id: string){
        return host.get<{}>(`/nft/collection/${denom}/nft/${id}`)
    }

    export function postTransferNFT(host: CosmosSdkHost, transferNFTReq: TransferNFTReq){
        return host.post<StdTx<MsgTransferNFT>>('/nfts/transfer', transferNFTReq)
    }

    export function postEditNFTMetadata(host: CosmosSdkHost, editNFTMetadataReq: EditNFTMetadataReq){
        return host.post<StdTx<MsgEditNFTMetadata>>(`/nfts/collection/${editNFTMetadataReq.denom}/nft/${editNFTMetadataReq.id}/metadata`, editNFTMetadataReq)
    }

    export function postMintNFT(host: CosmosSdkHost, mintNFTReq: MintNFTReq){
        return host.post<StdTx<MsgMintNFT>>(`/nfts/mint`, mintNFTReq)
    }

    export function putBurnNFT(host: CosmosSdkHost, burnNFTReq: BurnNFTReq){
        return host.put<StdTx<MsgBurnNFT>>(`/nfts/collection/${burnNFTReq.denom}/nft/${burnNFTReq.id}/burn`, burnNFTReq)
    }
}
