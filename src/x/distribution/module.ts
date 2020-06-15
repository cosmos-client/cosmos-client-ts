import { CosmosSDK } from "../../cosmos-sdk";
import {
  DistributionApi,
  WithdrawRewardsReq,
  SetWithdrawAddressReq,
} from "../../api";
import { AccAddress, ValAddress } from "../../types";
import { StdTx } from "../auth";
import { codec } from "../../codec";
import { AxiosPromise, AxiosResponse } from "axios";

export function communityPoolGet(sdk: CosmosSDK) {
  return sdk.wrapResponseWithHeight(
    new DistributionApi(undefined, sdk.url).distributionCommunityPoolGet(),
  );
}

export function delegatorsDelegatorAddrRewardsGet(
  sdk: CosmosSDK,
  delegator: AccAddress,
) {
  return sdk.wrapResponseWithHeight(
    new DistributionApi(
      undefined,
      sdk.url,
    ).distributionDelegatorsDelegatorAddrRewardsGet(delegator.toBech32()),
  );
}

export function delegatorsDelegatorAddrRewardsPost(
  sdk: CosmosSDK,
  delegator: AccAddress,
  req: WithdrawRewardsReq,
) {
  return new DistributionApi(undefined, sdk.url)
    .distributionDelegatorsDelegatorAddrRewardsPost(delegator.toBech32(), req)
    .then((res) =>
      codec.fromJSONString(JSON.stringify(res.data)),
    ) as AxiosPromise<StdTx>;
}

export function delegatorsDelegatorAddrRewardsValidatorAddrGet(
  sdk: CosmosSDK,
  delegator: AccAddress,
  validator: ValAddress,
) {
  return sdk.wrapResponseWithHeight(
    new DistributionApi(
      undefined,
      sdk.url,
    ).distributionDelegatorsDelegatorAddrRewardsValidatorAddrGet(
      delegator.toBech32(),
      validator.toBech32(),
    ),
  );
}

export function delegatorsDelegatorAddrRewardsValidatorAddrPost(
  sdk: CosmosSDK,
  delegator: AccAddress,
  validator: ValAddress,
  req: WithdrawRewardsReq,
) {
  return new DistributionApi(undefined, sdk.url)
    .distributionDelegatorsDelegatorAddrRewardsValidatorAddrPost(
      delegator.toBech32(),
      validator.toBech32(),
      req,
    )
    .then((res) =>
      codec.fromJSONString(JSON.stringify(res.data)),
    ) as AxiosPromise<StdTx>;
}

export function delegatorsDelegatorAddrWithdrawAddressGet(
  sdk: CosmosSDK,
  delegator: AccAddress,
) {
  return sdk.wrapResponseWithHeight(
    new DistributionApi(
      undefined,
      sdk.url,
    ).distributionDelegatorsDelegatorAddrWithdrawAddressGet(
      delegator.toBech32(),
    ),
  );
}

export function delegatorsDelegatorAddrWithdrawAddressPost(
  sdk: CosmosSDK,
  delegator: AccAddress,
  req: SetWithdrawAddressReq,
) {
  return new DistributionApi(undefined, sdk.url)
    .distributionDelegatorsDelegatorAddrWithdrawAddressPost(
      delegator.toBech32(),
      req,
    )
    .then((res) =>
      codec.fromJSONString(JSON.stringify(res.data)),
    ) as AxiosPromise<StdTx>;
}

export function parametersGet(sdk: CosmosSDK) {
  return sdk.wrapResponseWithHeight(
    new DistributionApi(undefined, sdk.url).distributionParametersGet(),
  );
}

export function validatorsValidatorAddrGet(
  sdk: CosmosSDK,
  validator: ValAddress,
) {
  return new DistributionApi(undefined, sdk.url)
    .distributionValidatorsValidatorAddrGet(validator.toBech32())
    .then((res) =>
      codec.fromJSONString(JSON.stringify(res.data)),
    ) as AxiosPromise<StdTx>;
}

export function validatorsValidatorAddrOutstandingRewardsGet(
  sdk: CosmosSDK,
  validator: ValAddress,
) {
  return sdk.wrapResponseWithHeight(
    sdk.wrapResponseWithHeight(
      new DistributionApi(
        undefined,
        sdk.url,
      ).distributionValidatorsValidatorAddrOutstandingRewardsGet(
        validator.toBech32(),
      ),
    ),
  );
}

export function validatorsValidatorAddrRewardsGet(
  sdk: CosmosSDK,
  validator: ValAddress,
) {
  return sdk.wrapResponseWithHeight(
    new DistributionApi(
      undefined,
      sdk.url,
    ).distributionValidatorsValidatorAddrRewardsGet(validator.toBech32()),
  );
}

export function validatorsValidatorAddrRewardsPost(
  sdk: CosmosSDK,
  validator: ValAddress,
  req: WithdrawRewardsReq,
) {
  return new DistributionApi(undefined, sdk.url)
    .distributionValidatorsValidatorAddrRewardsPost(validator.toBech32(), req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}
