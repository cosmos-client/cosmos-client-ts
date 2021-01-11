import { Content } from "./content";

export class TextProposal implements Content {
  static "@type": "/cosmos.gov.v1beta1.TextProposal";
  "@type": "/cosmos.gov.v1beta1.TextProposal";

  constructor(public title?: string, public description?: string) {}

  static fromJSON(value: any) {
    return new TextProposal(value.title, value.description);
  }

  getTitle() {
    return this.title || "";
  }
}
