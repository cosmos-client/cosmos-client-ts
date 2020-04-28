export class TextProposal {
  constructor(public title?: string, public description?: string) {}

  static fromJSON(value: any) {
    return new TextProposal(value.title, value.description);
  }
}
