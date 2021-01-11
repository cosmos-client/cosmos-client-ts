import { CosmosSDK } from "../../cosmos-sdk";
import { MintApi } from "../../api";

export function annualProvisionsGet(sdk: CosmosSDK) {
  return sdk.wrapResponseWithHeight(
    new MintApi(undefined, sdk.url).mintingAnnualProvisionsGet(),
  );
}

export function inflationGet(sdk: CosmosSDK) {
  return sdk.wrapResponseWithHeight(
    new MintApi(undefined, sdk.url).mintingInflationGet(),
  );
}

export function parametersGet(sdk: CosmosSDK) {
  return sdk.wrapResponseWithHeight(
    new MintApi(undefined, sdk.url).mintingParametersGet(),
  );
}
