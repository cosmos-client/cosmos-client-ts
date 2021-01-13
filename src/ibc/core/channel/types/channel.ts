import { AnyI } from "../../../../codec/any";
import { CounterParty, CounterPartyChannelI } from "./counterparty";

export enum State {
  UNINITIALIZED = 0,
  INIT = 1,
  TRYOPEN = 2,
  OPEN = 3,
  CLOSED = 4,
}

export enum Order {
  NONE = 0,
  UNORDERED = 1,
  ORDERED = 2,
}

export type ChannelI = AnyI & {
  getState(): State | null;
  getOrdering(): Order | null;
  getCounterParty(): CounterPartyChannelI | null;
  getConnectionHops(): string[];
  getVersion(): string;
};

export class Channel implements ChannelI {
  static "@type" = "/ibc.core.channel.v1.Channel";
  "@type" = "/ibc.core.channel.v1.Channel";

  constructor(
    public state?: State,
    public order?: Order,
    public counterparty?: CounterParty,
    public connection_hops?: string[],
    public version?: string,
  ) {}

  static fromJSON(value: any) {
    return new Channel(
      value?.state,
      value?.order,
      value?.counterparty,
      value?.connection_hops,
      value?.version,
    );
  }

  getState() {
    return this.state || null;
  }

  getOrdering() {
    return this.order || null;
  }

  getCounterParty() {
    return this.counterparty || null;
  }

  getConnectionHops() {
    return this.connection_hops || [];
  }

  getVersion() {
    return this.version || "";
  }
}
