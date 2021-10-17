import { cosmos } from '../../proto';
import { codec } from '../../types';

export * as bank from './module';

codec.register('/cosmos.bank.v1beta1.MsgSend', cosmos.bank.v1beta1.MsgSend);
codec.register('/cosmos.bank.v1beta1.MsgMultiSend', cosmos.bank.v1beta1.MsgMultiSend);
