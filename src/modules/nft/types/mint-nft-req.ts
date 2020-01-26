import { BaseReq } from "../../../types/cosmos-sdk/rest";
import { AccAddress } from "../../../types/cosmos-sdk/address/acc-address";

export interface MintNFTReq {
  base_req: BaseReq;
  recipient: AccAddress;
  denom: string;
  id: string;
  tokenURI: string;
}
