import { CosmosSDK } from "../../cosmos-sdk";
import { StakingApi } from "../../api";
import { AccAddress, ValAddress } from "../../types";
import { StdTx } from "../auth";
import { codec } from "../../codec";
import { AxiosPromise } from "axios";

export function delegatorsDelegatorAddrDelegationsGet(
  sdk: CosmosSDK,
  address: AccAddress,
) {
  return sdk.wrapResponseWithHeight(
    new StakingApi(
      undefined,
      sdk.url,
    ).stakingDelegatorsDelegatorAddrDelegationsGet(address.toBech32()),
  );
}

export function delegatorsDelegatorAddrDelegationsPost(
  sdk: CosmosSDK,
  delegator: AccAddress,
) {
  return new StakingApi(undefined, sdk.url)
    .stakingDelegatorsDelegatorAddrDelegationsPost(delegator.toBech32())
    .then((res) =>
      codec.fromJSONString(JSON.stringify(res.data)),
    ) as AxiosPromise<StdTx>;
}

export function delegatorsDelegatorAddrDelegationsValidatorAddrGet(
  sdk: CosmosSDK,
  delegator: AccAddress,
  validator: ValAddress,
) {
  return sdk.wrapResponseWithHeight(
    new StakingApi(
      undefined,
      sdk.url,
    ).stakingDelegatorsDelegatorAddrDelegationsValidatorAddrGet(
      delegator.toBech32(),
      validator.toBech32(),
    ),
  );
}

export function delegatorsDelegatorAddrRedelegationsPost(
  sdk: CosmosSDK,
  delegator: AccAddress,
) {
  return new StakingApi(undefined, sdk.url)
    .stakingDelegatorsDelegatorAddrRedelegationsPost(delegator.toBech32())
    .then((res) =>
      codec.fromJSONString(JSON.stringify(res.data)),
    ) as AxiosPromise<StdTx>;
}

export function delegatorsDelegatorAddrUnbondingDelegationsGet(
  sdk: CosmosSDK,
  delegator: AccAddress,
) {
  return sdk.wrapResponseWithHeight(
    new StakingApi(
      undefined,
      sdk.url,
    ).stakingDelegatorsDelegatorAddrUnbondingDelegationsGet(
      delegator.toBech32(),
    ),
  );
}

export function delegatorsDelegatorAddrUnbondingDelegationsPost(
  sdk: CosmosSDK,
  delegator: AccAddress,
) {
  return new StakingApi(undefined, sdk.url)
    .stakingDelegatorsDelegatorAddrUnbondingDelegationsPost(
      delegator.toBech32(),
    )
    .then((res) =>
      codec.fromJSONString(JSON.stringify(res.data)),
    ) as AxiosPromise<StdTx>;
}

export function delegatorsDelegatorAddrUnbondingDelegationsValidatorAddrGet(
  sdk: CosmosSDK,
  delegator: AccAddress,
  validator: ValAddress,
) {
  return sdk.wrapResponseWithHeight(
    new StakingApi(
      undefined,
      sdk.url,
    ).stakingDelegatorsDelegatorAddrUnbondingDelegationsValidatorAddrGet(
      delegator.toBech32(),
      validator.toBech32(),
    ),
  );
}

export function delegatorsDelegatorAddrValidatorsGet(
  sdk: CosmosSDK,
  delegator: AccAddress,
) {
  return sdk.wrapResponseWithHeight(
    new StakingApi(
      undefined,
      sdk.url,
    ).stakingDelegatorsDelegatorAddrValidatorsGet(delegator.toBech32()),
  );
}

export function delegatorsDelegatorAddrValidatorsValidatorAddrGet(
  sdk: CosmosSDK,
  delegator: AccAddress,
  validator: ValAddress,
) {
  return sdk.wrapResponseWithHeight(
    new StakingApi(
      undefined,
      sdk.url,
    ).stakingDelegatorsDelegatorAddrValidatorsValidatorAddrGet(
      delegator.toBech32(),
      validator.toBech32(),
    ),
  );
}

export function parametersGet(sdk: CosmosSDK) {
  return sdk.wrapResponseWithHeight(
    new StakingApi(undefined, sdk.url).stakingParametersGet(),
  );
}

export function poolGet(sdk: CosmosSDK) {
  return sdk.wrapResponseWithHeight(
    new StakingApi(undefined, sdk.url).stakingPoolGet(),
  );
}

export function redelegationsGet(
  sdk: CosmosSDK,
  delegator?: AccAddress,
  validatorFrom?: ValAddress,
  validatorTo?: ValAddress,
) {
  return sdk.wrapResponseWithHeight(
    new StakingApi(undefined, sdk.url).stakingRedelegationsGet(
      delegator?.toBech32(),
      validatorFrom?.toBech32(),
      validatorTo?.toBech32(),
    ),
  );
}

export function validatorsGet(
  sdk: CosmosSDK,
  status?: string,
  page?: number,
  limit?: number,
) {
  return sdk.wrapResponseWithHeight(
    new StakingApi(undefined, sdk.url).stakingValidatorsGet(
      status,
      page,
      limit,
    ),
  );
}

export function validatorsValidatorAddrDelegationsGet(
  sdk: CosmosSDK,
  validator: ValAddress,
) {
  return sdk.wrapResponseWithHeight(
    new StakingApi(
      undefined,
      sdk.url,
    ).stakingValidatorsValidatorAddrDelegationsGet(validator.toBech32()),
  );
}

export function validatorsValidatorAddrGet(
  sdk: CosmosSDK,
  validator: ValAddress,
) {
  return sdk.wrapResponseWithHeight(
    new StakingApi(undefined, sdk.url).stakingValidatorsValidatorAddrGet(
      validator.toBech32(),
    ),
  );
}

export function validatorsValidatorAddrUnbondingDelegationsGet(
  sdk: CosmosSDK,
  validator: ValAddress,
) {
  return sdk.wrapResponseWithHeight(
    new StakingApi(
      undefined,
      sdk.url,
    ).stakingValidatorsValidatorAddrUnbondingDelegationsGet(
      validator.toBech32(),
    ),
  );
}
