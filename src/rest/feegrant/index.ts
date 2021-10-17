import { cosmos } from '../../proto';
import { codec } from '../../types';

export * as feegrant from './module';

codec.register('/cosmos.feegrant.v1beta1.MsgGrantAllowance', cosmos.feegrant.v1beta1.MsgGrantAllowance);
codec.register('/cosmos.feegrant.v1beta1.MsgRevokeAllowance', cosmos.feegrant.v1beta1.MsgRevokeAllowance);
