import { BaseReq } from "../../../types/rest";

export interface BurnNFTReq {
  base_req: BaseReq;
  denom: string;
  id: string;
}
