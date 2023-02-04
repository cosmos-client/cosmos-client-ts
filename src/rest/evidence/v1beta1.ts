/* eslint-disable jest/require-hook */
import { QueryApi } from '../../openapi/api';
import { cosmos } from '../../proto';
import { codec } from '../../types';

codec.register(
  '/cosmos.evidence.v1beta1.MsgSubmitEvidence',
  cosmos.evidence.v1beta1.MsgSubmitEvidence,
);

export function v1beta1(url: string): Pick<QueryApi, 'evidence' | 'allEvidence'> {
  return new QueryApi(undefined, url);
}
