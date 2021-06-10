import { codec } from '../../../types';
import { cosmos } from '../../../proto';

export * as bank from './module';

codec.register('/cosmos.bank.v1beta1.MsgSend', cosmos.bank.v1beta1.MsgSend);
codec.register('/cosmos.bank.v1beta1.MsgMultiSend', cosmos.bank.v1beta1.MsgMultiSend);
