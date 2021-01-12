import { codec } from "../../../codec";
import { CancelSoftwareUpgradeProposal } from "./cancel-software-upgrade-proposal";
import { SoftwareUpgradeProposal } from "./software-upgrade-proposal";

export * from "./software-upgrade-proposal";
export * from "./cancel-software-upgrade-proposal";

// Register codec
codec.register(
  SoftwareUpgradeProposal["@type"],
  SoftwareUpgradeProposal,
  SoftwareUpgradeProposal.fromJSON,
);
codec.register(
  CancelSoftwareUpgradeProposal["@type"],
  CancelSoftwareUpgradeProposal,
  CancelSoftwareUpgradeProposal.fromJSON,
);
