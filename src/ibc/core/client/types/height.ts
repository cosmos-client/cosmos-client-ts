import { Any } from "../../../../cosmos/types/any";

export type HeightI = Any & {
  getRevisionNumber(): bigint | null;
  getRevisionHeight(): bigint | null;
};

export class Height implements HeightI {
  static "@type" = "/ibc.core.client.v1.Height";
  "@type" = "/ibc.core.client.v1.Height";

  constructor(
    public revision_number?: bigint,
    public revision_height?: bigint,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.revision_number) {
      value.revision_number = this.revision_number.toString();
    }
    if (this.revision_height) {
      value.revision_height = this.revision_height.toString();
    }

    return value;
  }

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new Height(
      BigInt(value?.revision_number),
      BigInt(value?.revision_height),
    );
  }

  getRevisionNumber() {
    return this.revision_number || null;
  }

  getRevisionHeight() {
    return this.revision_height || null;
  }
}
