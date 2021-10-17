import { cosmos } from '../../../proto';
import { codec } from '../../../types';

export * as authz from './module';

codec.register('/cosmos.authz.v1beta1.MsgGrant', cosmos.authz.v1beta1.MsgGrant);
codec.register('/cosmos.authz.v1beta1.MsgExec', cosmos.authz.v1beta1.MsgExec);
codec.register('/cosmos.authz.v1beta1.MsgRevoke', cosmos.authz.v1beta1.MsgRevoke);
