import { BaseReq } from "../../../types/cosmos-sdk/rest";

export interface BurnNFTReq {
  base_req: BaseReq;
  denom: string;
  id: string;
}
