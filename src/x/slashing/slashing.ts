import { CosmosSDK } from "../..";
import { AccAddress } from "../../types/cosmos-sdk/address/acc-address";
import { SigningInfo } from "./types/signing-info";
import { SignParameter } from "./types/sign-parameter";
import { ValAddress } from "../../types/cosmos-sdk/address/val-address";
import { BaseReq } from "../../types/cosmos-sdk/rest";
import { StdTx } from "../auth/types/stdtx";
import { MsgUnjail } from "./types/msg-unjail";

export module Slashing {
  /**
   *
   */

  export function postUnjail(
    host: CosmosSDK,
    validatorAddr: ValAddress,
    baseReq: BaseReq
  ) {
    return host.post<StdTx<MsgUnjail>>(
      `/slashing/validators/${validatorAddr}/unjail`,
      baseReq
    );
  }

  export function getParams(host: CosmosSDK, validatorPubKey: AccAddress) {
    return host.get<SigningInfo>(
      `/slashing/validators/${validatorPubKey}/signing_info`
    );
  }

  export function getSignInfo(host: CosmosSDK) {
    return host.get<SignParameter>("/slashing/signing_infos");
  }

  export function getSignInfos(host: CosmosSDK) {
    return host.get<SigningInfo>("/slashing/parameters");
  }
}
