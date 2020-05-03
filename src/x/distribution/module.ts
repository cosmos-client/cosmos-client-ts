import { CosmosSDK } from "../../cosmos-sdk";
import { DistributionApi } from "../../api";

export function _(sdk: CosmosSDK) {
  return new DistributionApi(undefined, sdk.url).distributionCommunityPoolGet;
}

export function _(sdk: CosmosSDK) {
  return new DistributionApi(undefined, sdk.url)
    .distributionDelegatorsDelegatorAddrRewardsGet;
}

export function _(sdk: CosmosSDK) {
  return new DistributionApi(undefined, sdk.url)
    .distributionDelegatorsDelegatorAddrRewardsPost;
}

export function _(sdk: CosmosSDK) {
  return new DistributionApi(undefined, sdk.url)
    .distributionDelegatorsDelegatorAddrRewardsValidatorAddrGet;
}

export function _(sdk: CosmosSDK) {
  return new DistributionApi(undefined, sdk.url)
    .distributionDelegatorsDelegatorAddrRewardsValidatorAddrPost;
}

export function _(sdk: CosmosSDK) {
  return new DistributionApi(undefined, sdk.url)
    .distributionDelegatorsDelegatorAddrWithdrawAddressGet;
}

export function _(sdk: CosmosSDK) {
  return new DistributionApi(undefined, sdk.url)
    .distributionDelegatorsDelegatorAddrWithdrawAddressPost;
}

export function _(sdk: CosmosSDK) {
  return new DistributionApi(undefined, sdk.url).distributionParametersGet;
}

export function _(sdk: CosmosSDK) {
  return new DistributionApi(undefined, sdk.url)
    .distributionValidatorsValidatorAddrGet;
}

export function _(sdk: CosmosSDK) {
  return new DistributionApi(undefined, sdk.url)
    .distributionValidatorsValidatorAddrOutstandingRewardsGet;
}

export function _(sdk: CosmosSDK) {
  return new DistributionApi(undefined, sdk.url)
    .distributionValidatorsValidatorAddrRewardsGet;
}

export function _(sdk: CosmosSDK) {
  return new DistributionApi(undefined, sdk.url)
    .distributionValidatorsValidatorAddrRewardsPost;
}
