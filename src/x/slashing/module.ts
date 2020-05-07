import { CosmosSDK } from "../../cosmos-sdk";
import { SlashingApi, UnjailReq } from "../../api";
import { ValAddress } from "../../types";
import { StdTx } from "../auth";

export function parametersGet(sdk: CosmosSDK) {
  return new SlashingApi(undefined, sdk.url).slashingParametersGet();
}

export function signingInfosGet(sdk: CosmosSDK, page: number, limit: number) {
  return new SlashingApi(undefined, sdk.url).slashingSigningInfosGet(
    page,
    limit,
  );
}

export function validatorsValidatorAddrUnjailPost(
  sdk: CosmosSDK,
  validator: ValAddress,
  req: UnjailReq,
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new SlashingApi(
      undefined,
      sdk.url,
    ).slashingValidatorsValidatorAddrUnjailPost(validator.toBech32(), req),
  );
}