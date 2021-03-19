import { codec } from '../../codec';
import { cosmos } from '../../proto';

export * as bank from './module';

codec.register('/cosmos.bank.v1beta1.MsgSend', cosmos.bank.v1beta1.MsgSend, cosmos.bank.v1beta1.MsgSend.fromObject);
codec.register('/cosmos.bank.v1beta1.MsgMultiSend', cosmos.bank.v1beta1.MsgMultiSend, cosmos.bank.v1beta1.MsgMultiSend.fromObject);
