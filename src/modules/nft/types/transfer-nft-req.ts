import { BaseReq } from "../../../types/cosmos-sdk/rest";

export interface TransferNFTReq {
  base_req: BaseReq;
  denom: string;
  id: string;
  recipient: string;
}
