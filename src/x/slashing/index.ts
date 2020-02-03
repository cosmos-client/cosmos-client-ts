import { CosmosSDK } from "../../cosmos-sdk";
import { Amino } from "../../codec";
import { AccAddress, ValAddress, BaseReq } from "../../types";
import { SigningInfo, SignParameter, MsgUnjail } from "./types";
import { StdTx } from "../auth";

export * from "./types";

// Register Codec
import "../auth";
Amino.RegisterCodec("cosmos-sdk/MsgUnjail", MsgUnjail, MsgUnjail.fromJSON);

export namespace Slashing {
  export function postUnjail(
    sdk: CosmosSDK,
    validatorAddr: ValAddress,
    baseReq: BaseReq
  ) {
    return sdk.post<StdTx>(
      `/slashing/validators/${validatorAddr}/unjail`,
      baseReq
    );
  }

  export function getParams(sdk: CosmosSDK, validatorPubKey: AccAddress) {
    return sdk.get<SigningInfo>(
      `/slashing/validators/${validatorPubKey}/signing_info`
    );
  }

  export function getSignInfo(sdk: CosmosSDK) {
    return sdk.get<SignParameter>("/slashing/signing_infos");
  }

  export function getSignInfos(sdk: CosmosSDK) {
    return sdk.get<SigningInfo>("/slashing/parameters");
  }
}
