import { BaseReq } from "../../../types/rest";

export interface EditNFTMetadataReq {
  base_req: BaseReq;
  denom: string;
  id: string;
  tokenURI: string;
}
