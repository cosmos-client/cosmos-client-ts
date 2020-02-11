import { CosmosSDK } from "../../cosmos-sdk";
import { AccAddress, ValAddress, BaseReq } from "../../types";
import { SigningInfo, SignParameter } from "./types";
import { StdTx } from "../auth";
import { UnjailReq } from "./types/unjail-req";

/**
 * `/slashing/validators/{validatorAddr}/unjail
 * @param sdk
 * @param validatorAddr
 * @param baseReq
 */
export function unjailRequest(
  sdk: CosmosSDK,
  validatorAddr: ValAddress,
  req: UnjailReq,
) {
  return sdk.post<StdTx>(`/slashing/validators/${validatorAddr}/unjail`, req);
}

/**
 * `/slashing/validators/{validatorPubKey}/signing_info`
 * @param sdk
 * @param validatorPubKey
 */
export function getParams(sdk: CosmosSDK, validatorPubKey: AccAddress) {
  return sdk.get<SigningInfo>(
    `/slashing/validators/${validatorPubKey}/signing_info`,
  );
}

/**
 * `/slashing/signing_infos`
 * @param sdk
 */
export function getSignInfo(sdk: CosmosSDK) {
  return sdk.get<SignParameter>("/slashing/signing_infos");
}

/**
 * `/slashing/parameters`
 * @param sdk
 */
export function getSignInfos(sdk: CosmosSDK) {
  return sdk.get<SigningInfo>("/slashing/parameters");
}
