import { BaseReq, AccAddress } from "../../../types";

export type VoteReq = {
  base_req: BaseReq;
  votor: AccAddress;
  option: string;
};
