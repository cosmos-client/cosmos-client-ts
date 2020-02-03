import { BaseReq } from "../../../types/rest";
import { AccAddress } from "../../../types/address/acc-address";

export interface MintNFTReq {
  base_req: BaseReq;
  recipient: AccAddress;
  denom: string;
  id: string;
  tokenURI: string;
}
