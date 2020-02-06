import { BaseReq } from "../../../types/rest";
import { AccAddress } from "../../../types/address/acc-address";

export type MintNFTReq = {
  base_req: BaseReq;
  recipient: AccAddress;
  denom: string;
  id: string;
  tokenURI: string;
};
