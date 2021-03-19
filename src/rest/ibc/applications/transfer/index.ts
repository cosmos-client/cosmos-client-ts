import { codec } from '../../../../types';
import { ibc } from '../../../../proto';

export * as transfer from './module';

codec.register(
  '/ibc.applications.transfer.v1.MsgTransfer',
  ibc.applications.transfer.v1.MsgTransfer,
  ibc.applications.transfer.v1.MsgTransfer.fromObject,
);
