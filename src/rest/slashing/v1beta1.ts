/* eslint-disable jest/require-hook */
import { QueryApi } from '../../openapi/api';
import { cosmos } from '../../proto';
import { codec } from '../../types';

codec.register('/cosmos.slashing.v1beta1.MsgUnjail', cosmos.slashing.v1beta1.MsgUnjail);

export function v1beta1(
  url: string,
): Pick<QueryApi, 'slashingParams' | 'signingInfo' | 'signingInfos'> {
  return new QueryApi(undefined, url);
}
