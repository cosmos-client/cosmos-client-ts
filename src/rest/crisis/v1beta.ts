/* eslint-disable jest/require-hook */
import { cosmos } from '../../proto';
import { codec } from '../../types';

codec.register(
  '/cosmos.crisis.v1beta1.MsgVerifyInvariant',
  cosmos.crisis.v1beta1.MsgVerifyInvariant,
);
