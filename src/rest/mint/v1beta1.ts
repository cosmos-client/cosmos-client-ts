import { QueryApi } from '../../openapi/api';

export function v1beta1(
  url: string,
): Pick<QueryApi, 'annualProvisions' | 'inflation' | 'mintParams'> {
  return new QueryApi(undefined, url);
}
