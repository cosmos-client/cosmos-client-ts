import { codec } from '../../codec';
import { cosmos } from '../../proto';

// export * as crisis from './module';

codec.register(
  '/cosmos.crisis.v1beta1.MsgVerifyInvariant',
  cosmos.crisis.v1beta1.MsgVerifyInvariant,
  cosmos.crisis.v1beta1.MsgVerifyInvariant.fromObject,
);
