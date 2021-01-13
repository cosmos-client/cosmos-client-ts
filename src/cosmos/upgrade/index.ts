import { codec } from "../../codec";
import { cosmos } from "../../generated/proto";

// export * as upgrade from "./module";
import * as upgrade from "./module";
export { upgrade };

codec.register(
  "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal",
  cosmos.upgrade.v1beta1.SoftwareUpgradeProposal,
  cosmos.upgrade.v1beta1.SoftwareUpgradeProposal.fromObject,
);
codec.register(
  "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal",
  cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal,
  cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal.fromObject,
);
