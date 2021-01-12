import { Any } from "../../../../cosmos/types/any";
import { CounterParty } from "./counterparty";
import { Version } from "./version";

export enum State {
  UNINITIALIZED = 0,
  INIT = 1,
  TRYOPEN = 2,
  OPEN = 3,
}

export type ConnectionI = Any & {
  getClientID(): string;
};

export class ConnectionEnd implements ConnectionI {
  static "@type" = "/ibc.core.connection.v1.ConnectionEnd";
  "@type" = "/ibc.core.connection.v1.ConnectionEnd";

  constructor(
    public client_id?: string,
    public versions?: Version[],
    public state?: State,
    public counterparty?: CounterParty,
    public delay_period?: bigint,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.delay_period) {
      value.delay_period = this.delay_period.toString();
    }

    return value;
  }

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new ConnectionEnd(
      value?.client_id,
      value?.versions,
      value?.state,
      value?.counterparty,
      BigInt(value?.delay_period),
    );
  }

  getClientID() {
    return this.client_id || "";
  }
}
