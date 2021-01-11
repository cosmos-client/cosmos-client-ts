import { Coin } from "../../../api";
import { codec } from "../../../codec";
import { Any } from "../../types/any";

export class CommunityPoolSpendProposal implements Any {
  static "@type": "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";
  "@type": "/cosmos.distribution.v1beta1.CommunityPoolSpendProposal";

  constructor(
    public title?: string,
    public description?: string,
    public recipient?: string,
    public amount?: Coin[],
  ) {}

  static fromJSON(value: any) {
    return new CommunityPoolSpendProposal(
      value?.title,
      value?.description,
      value?.recipient,
      value?.amount,
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
