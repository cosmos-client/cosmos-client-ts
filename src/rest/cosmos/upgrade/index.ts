import { codec } from '../../../types';
import { cosmos } from '../../../proto';

export * as upgrade from './module';

codec.register(
  '/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal',
  cosmos.upgrade.v1beta1.SoftwareUpgradeProposal,
  cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.fromObject,
);
codec.register(
  '/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal',
  cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal,
  cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.fromObject,
);
