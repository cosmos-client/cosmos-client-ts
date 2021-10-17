import { cosmos } from '../../proto';
import { codec } from '../../types';

export * as feegrant from './module';

codec.register('/cosmos.feegrant.v1beta1.MsgGrantAllowance', cosmos.feegrant.v1beta1.MsgGrantAllowance);
codec.register('/cosmos.feegrant.v1beta1.MsgRevokeAllowance', cosmos.feegrant.v1beta1.MsgRevokeAllowance);

codec.register('/cosmos.feegrant.v1beta1.BasicAllowance', cosmos.feegrant.v1beta1.BasicAllowance);
codec.register('/cosmos.feegrant.v1beta1.PeriodicAllowance', cosmos.feegrant.v1beta1.PeriodicAllowance);
codec.register('/cosmos.feegrant.v1beta1.AllowedMsgAllowance', cosmos.feegrant.v1beta1.AllowedMsgAllowance);
