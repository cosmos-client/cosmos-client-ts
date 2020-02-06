import { BaseReq } from "../../../types/rest";

export type TransferNFTReq = {
  base_req: BaseReq;
  denom: string;
  id: string;
  recipient: string;
};
