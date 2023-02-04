/* eslint-disable jest/require-hook */
import { QueryApi } from '../../openapi/api';
import { cosmos } from '../../proto';
import { codec } from '../../types';

codec.register('/cosmos.authz.v1beta1.MsgGrant', cosmos.authz.v1beta1.MsgGrant);
codec.register('/cosmos.authz.v1beta1.MsgExec', cosmos.authz.v1beta1.MsgExec);
codec.register('/cosmos.authz.v1beta1.MsgRevoke', cosmos.authz.v1beta1.MsgRevoke);

codec.register(
  '/cosmos.authz.v1beta1.GenericAuthorization',
  cosmos.authz.v1beta1.GenericAuthorization,
);

export function v1beta1(url: string): Pick<QueryApi, 'grants' | 'granterGrants' | 'granteeGrants'> {
  return new QueryApi(undefined, url);
}
