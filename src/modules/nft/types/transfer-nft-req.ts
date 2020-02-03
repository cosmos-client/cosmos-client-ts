import { BaseReq } from "../../../types/rest";

export interface TransferNFTReq {
  base_req: BaseReq;
  denom: string;
  id: string;
  recipient: string;
}
