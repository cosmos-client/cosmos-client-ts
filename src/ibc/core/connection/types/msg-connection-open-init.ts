import { codec } from "../../../../codec";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { CounterParty } from "./counterparty";
import { Version } from "./version";

/**
 *
 */
export class MsgConnectionOpenInit implements Msg {
  static "@type" = "/ibc.core.connection.v1.MsgConnectionOpenInit";
  "@type" = "/ibc.core.connection.v1.MsgConnectionOpenInit";

  constructor(
    public client_id?: string,
    public counterparty?: CounterParty,
    public version?: Version,
    public delay_period?: bigint,
    public signer?: AccAddress,
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
    return new MsgConnectionOpenInit(
      value?.client_id,
      value?.counterparty,
      value?.version,
      BigInt(value?.delay_period),
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}