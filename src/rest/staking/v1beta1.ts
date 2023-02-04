/* eslint-disable jest/require-hook */
import { QueryApi } from '../../openapi/api';
import { cosmos } from '../../proto';
import { codec } from '../../types';

codec.register(
  '/cosmos.staking.v1beta1.MsgBeginRedelegate',
  cosmos.staking.v1beta1.MsgBeginRedelegate,
);
codec.register(
  '/cosmos.staking.v1beta1.MsgCreateValidator',
  cosmos.staking.v1beta1.MsgCreateValidator,
);
codec.register('/cosmos.staking.v1beta1.MsgDelegate', cosmos.staking.v1beta1.MsgDelegate);
codec.register('/cosmos.staking.v1beta1.MsgEditValidator', cosmos.staking.v1beta1.MsgEditValidator);
codec.register('/cosmos.staking.v1beta1.MsgUndelegate', cosmos.staking.v1beta1.MsgUndelegate);

export function v1beta1(
  url: string,
): Pick<
  QueryApi,
  | 'validators'
  | 'validator'
  | 'validatorDelegations'
  | 'validatorUnbondingDelegations'
  | 'delegation'
  | 'unbondingDelegation'
  | 'delegatorDelegations'
  | 'delegatorUnbondingDelegations'
  | 'redelegations'
  | 'delegatorValidators'
  | 'delegatorValidator'
  | 'historicalInfo'
  | 'pool'
  | 'stakingParams'
> {
  return new QueryApi(undefined, url);
}
