import { CosmosSDK } from "../../cosmos-sdk";
import { SlashingApi, UnjailReq } from "../../api";
import { ValAddress } from "../../types";
import { StdTx } from "../auth";
import { codec } from "../../codec";
import { AxiosPromise } from "axios";

export function parametersGet(sdk: CosmosSDK) {
  return sdk.wrapResponseWithHeight(
    new SlashingApi(undefined, sdk.url).slashingParametersGet(),
  );
}

export function signingInfosGet(sdk: CosmosSDK, page: number, limit: number) {
  return sdk.wrapResponseWithHeight(
    new SlashingApi(undefined, sdk.url).slashingSigningInfosGet(page, limit),
  );
}

export function validatorsValidatorAddrUnjailPost(
  sdk: CosmosSDK,
  validator: ValAddress,
  req: UnjailReq,
) {
  return new SlashingApi(undefined, sdk.url)
    .slashingValidatorsValidatorAddrUnjailPost(validator.toBech32(), req)
    .then((res) =>
      codec.fromJSONString(JSON.stringify(res.data)),
    ) as AxiosPromise<StdTx>;
}
