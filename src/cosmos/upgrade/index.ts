import {
  SoftwareUpgradeProposal,
  CancelSoftwareUpgradeProposal,
} from "./types";
import { codec } from "../../codec";

// export * as upgrade from "./module";
import * as upgrade from "./module";
export { upgrade };
export * from "./types";

// Register codec
codec.registerCodec(
  SoftwareUpgradeProposal["@type"],
  SoftwareUpgradeProposal,
  SoftwareUpgradeProposal.fromJSON,
);
codec.registerCodec(
  CancelSoftwareUpgradeProposal["@type"],
  CancelSoftwareUpgradeProposal,
  CancelSoftwareUpgradeProposal.fromJSON,
);
