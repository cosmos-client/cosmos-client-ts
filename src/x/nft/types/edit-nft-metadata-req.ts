import { BaseReq } from "../../../types/cosmos-sdk/rest";

export interface EditNFTMetadataReq {
    base_req: BaseReq;
    denom: string;
    id: string;
    tokenURI: string;
}