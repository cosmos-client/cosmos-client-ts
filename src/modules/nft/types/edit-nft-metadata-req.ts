import { BaseReq } from "../../../types/rest";

export type EditNFTMetadataReq = {
  base_req: BaseReq;
  denom: string;
  id: string;
  tokenURI: string;
};
