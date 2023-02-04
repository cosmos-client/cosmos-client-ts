/* eslint-disable jest/require-hook */
import { QueryApi } from '../../openapi/api';
import { cosmos } from '../../proto';
import { codec } from '../../types';

codec.register('/cosmos.nft.v1beta1.MsgSend', cosmos.nft.v1beta1.MsgSend);

export function v1beta1(
  url: string,
): Pick<QueryApi, 'nftBalance' | 'owner' | 'supply' | 'nFTs' | 'nFT' | '_class' | 'classes'> {
  return new QueryApi(undefined, url);
}
