import { Any } from "../../../../cosmos/types/any";

export type VersionI = Any & {
  getIdentifier(): string;
  getFeatures(): string[];
};

export class Version implements VersionI {
  static "@type" = "/ibc.core.connection.v1.Version";
  "@type" = "/ibc.core.connection.v1.Version";

  constructor(public identifier?: string, public features?: string[]) {}

  static fromJSON(value: any) {
    return new Version(value?.identifier, value?.features);
  }

  getIdentifier() {
    return this.identifier || "";
  }

  getFeatures() {
    return this.features || [];
  }
}
