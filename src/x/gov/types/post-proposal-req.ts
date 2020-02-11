import { BaseReq, AccAddress, Coin } from "../../../types";

export type PostProposalReq = {
  base_req: BaseReq;
  title: string;
  description: string;
  proposal_type: string;
  proposer: AccAddress;
  initial_deposit: Coin[];
};
