import { cosmos } from '../../proto';
import { codec } from '../../types';

export * as nft from './module';

codec.register('/cosmos.nft.v1beta1.MsgSend', cosmos.nft.v1beta1.MsgSend);
