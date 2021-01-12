import { Any } from "../../../../cosmos/types/any";

export type CounterPartyChannelI = Any & {
  getClientID(): string;
};

export class CounterParty implements CounterPartyChannelI {
  static "@type" = "/ibc.core.connection.v1.Counterparty";
  "@type" = "/ibc.core.connection.v1.Counterparty";

  constructor(
    public client_id?: string,
    public connection_id?: string,
    public prefix?: any, // TODO
  ) {}

  static fromJSON(value: any) {
    return new CounterParty(
      value?.client_id,
      value?.connection_id,
      value?.prefix,
    );
  }

  getClientID() {
    return this.client_id || "";
  }
}
