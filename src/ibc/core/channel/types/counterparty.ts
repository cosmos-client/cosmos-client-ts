import { Any } from "../../../../cosmos/types/any";

export type CounterPartyChannelI = Any & {
  getPortID(): string;
  getChannelID(): string;
};

export class CounterParty implements CounterPartyChannelI {
  static "@type" = "/ibc.core.channel.v1.Counterparty";
  "@type" = "/ibc.core.channel.v1.Counterparty";

  constructor(public port_id?: string, public channel_id?: string) {}

  static fromJSON(value: any) {
    return new CounterParty(value?.port_id, value?.channel_id);
  }

  getPortID() {
    return this.port_id || "";
  }

  getChannelID() {
    return this.channel_id || "";
  }
}
