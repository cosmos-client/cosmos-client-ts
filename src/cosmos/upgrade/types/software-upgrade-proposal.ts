import { Content } from "../../gov/types/content";
import { AnyI } from "../../../codec/any";

type Plan = {
  name?: string;
  time: string;
  height?: bigint;
  info?: string;
  upgraded_client_state?: AnyI;
};

export class SoftwareUpgradeProposal implements Content {
  static "@type": "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
  "@type": "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";

  constructor(
    public title?: string,
    public description?: string,
    public plan?: Plan,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.plan?.height) {
      value.plan.height = this.plan.height.toString();
    }

    return value;
  }

  static fromJSON(value: any) {
    return new SoftwareUpgradeProposal(value?.title, value?.description, {
      ...value?.plan,
      height: BigInt(value?.plan?.height),
    });
  }

  getTitle() {
    return this.title || "";
  }
}
