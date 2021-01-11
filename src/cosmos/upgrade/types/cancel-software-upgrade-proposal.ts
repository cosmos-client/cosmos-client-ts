import { Content } from "../../gov/types/content";

export class CancelSoftwareUpgradeProposal implements Content {
  static "@type": "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
  "@type": "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";

  constructor(public title?: string, public description?: string) {}

  static fromJSON(value: any) {
    return new CancelSoftwareUpgradeProposal(value?.title, value?.description);
  }

  getTitle() {
    return this.title || "";
  }
}
