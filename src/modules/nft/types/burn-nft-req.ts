import { BaseReq } from "../../../types/rest";

export type BurnNFTReq = {
  base_req: BaseReq;
  denom: string;
  id: string;
}
