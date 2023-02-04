import { ServiceApi } from '../../../openapi/api';

export function v1beta1(
  url: string,
): Pick<
  ServiceApi,
  | 'getNodeInfo'
  | 'getSyncing'
  | 'getLatestBlock'
  | 'getBlockByHeight'
  | 'getLatestValidatorSet'
  | 'getValidatorSetByHeight'
  | 'aBCIQuery'
> {
  return new ServiceApi(undefined, url);
}
