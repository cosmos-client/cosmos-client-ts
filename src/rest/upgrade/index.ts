import { cosmos } from '../../proto';
import { codec } from '../../types';

export * as upgrade from './module';

codec.register('/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal', cosmos.upgrade.v1beta1.SoftwareUpgradeProposal);
codec.register('/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal', cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal);
