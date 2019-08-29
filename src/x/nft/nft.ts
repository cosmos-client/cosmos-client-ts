import { CosmosSdkHost } from "../../common/cosmos-sdk-host";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";
import { StdTx } from "../auth/types/stdtx";
import { TransferNFTReq } from "./types/transferNFTReq";
import { EditNFTMetadataReq } from "./types/editNFTMetadataReq";
import { MintNFTReq } from "./types/mintNFTReq";
import { BurnNFTReq } from "./types/burnNFTReq";

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
        return host.post<StdTx>('/nfts/transfer', transferNFTReq)
    }

    export function postEditNFTMetadata(host: CosmosSdkHost, denom: string, id: string, editNFTMetadataReq: EditNFTMetadataReq){
        return host.post<StdTx>(`/nfts/collection/${denom}/nft/${id}/metadata`, editNFTMetadataReq)
    }

    export function postMintNFT(host: CosmosSdkHost, mintNFTReq: MintNFTReq){
        return host.post<StdTx>(`/nfts/mint`, mintNFTReq)
    }

    export function putBurnNFT(host: CosmosSdkHost, denom: string, id: number, burnNFTReq: BurnNFTReq){
        return host.put<StdTx>(`/nfts/collection/${denom}/nft/${id}/burn`, burnNFTReq)
    }
}
