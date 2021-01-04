import {
  Plan,
  SoftwareUpgradeProposal,
  CancelSoftwareUpgradeProposal,
} from "./types";
import { codec } from "../../codec";

export * as upgrade from "./module";
export * from "./types";

// Register codec
codec.registerCodec("cosmos-sdk/Plan", Plan, Plan.fromJSON);
codec.registerCodec(
  "cosmos-sdk/SoftwareUpgradeProposal",
  SoftwareUpgradeProposal,
  SoftwareUpgradeProposal.fromJSON,
);
codec.registerCodec(
  "cosmos-sdk/CancelSoftwareUpgradeProposal",
  CancelSoftwareUpgradeProposal,
  CancelSoftwareUpgradeProposal.fromJSON,
);
