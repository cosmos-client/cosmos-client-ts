import { CosmosSDK } from "../../cosmos-sdk";
import { MintApi } from "../../api";

export function annualProvisionsGet(sdk: CosmosSDK) {
  return new MintApi(undefined, sdk.url).mintingAnnualProvisionsGet();
}

export function inflationGet(sdk: CosmosSDK) {
  return new MintApi(undefined, sdk.url).mintingInflationGet();
}

export function parametersGet(sdk: CosmosSDK) {
  return new MintApi(undefined, sdk.url).mintingParametersGet();
}
