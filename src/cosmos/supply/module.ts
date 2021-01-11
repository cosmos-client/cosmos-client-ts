import { CosmosSDK } from "../../cosmos-sdk";
import { SupplyApi } from "../../api";

export function totalDenominationGet(sdk: CosmosSDK, denomination: string) {
  return sdk.wrapResponseWithHeight(
    new SupplyApi(undefined, sdk.url).supplyTotalDenominationGet(denomination),
  );
}

export function totalGet(sdk: CosmosSDK) {
  return sdk.wrapResponseWithHeight(
    new SupplyApi(undefined, sdk.url).supplyTotalGet(),
  );
}
