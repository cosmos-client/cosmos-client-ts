import { QueryApi } from '../../openapi/api';

export function v1beta1(url: string): Pick<QueryApi, 'params' | 'subspaces'> {
  return new QueryApi(undefined, url);
}
