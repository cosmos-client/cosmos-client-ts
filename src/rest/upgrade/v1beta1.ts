/* eslint-disable jest/require-hook */
import { QueryApi } from '../../openapi';
import { cosmos } from '../../proto';
import { codec } from '../../types';

codec.register(
  '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal',
  cosmos.upgrade.v1beta1.SoftwareUpgradeProposal,
);
codec.register(
  '/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal',
  cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal,
);

export function v1beta1(url: string): Pick<QueryApi, 'currentPlan' | 'appliedPlan'> {
  return new QueryApi(undefined, url);
}
