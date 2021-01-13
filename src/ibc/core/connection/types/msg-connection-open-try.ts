import { codec } from "../../../../codec";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { AnyI } from "../../../../codec/any";
import { Height } from "../../client/types";
import { CounterParty } from "./counterparty";
import { Version } from "./version";

/**
 *
 */
export class MsgConnectionOpenTry implements Msg {
  static "@type" = "/ibc.core.connection.v1.MsgConnectionOpenTry";
  "@type" = "/ibc.core.connection.v1.MsgConnectionOpenTry";

  constructor(
    public client_id?: string,
    public previous_client_id?: string,
    public client_state?: AnyI,
    public counterparty?: CounterParty,
    public delay_period?: bigint,
    public counterparty_versions?: Version[],
    public proof_height?: Height,
    public proof_init?: Buffer,
    public proof_client?: Buffer,
    public proof_consensus?: Buffer,
    public consensus_height?: Height,
    public signer?: AccAddress,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.delay_period) {
      value.delay_period = this.delay_period.toString();
    }
    if (this.proof_init) {
      value.proof_init = this.proof_init.toString("hex");
    }
    if (this.proof_client) {
      value.proof_client = this.proof_client.toString("hex");
    }
    if (this.proof_consensus) {
      value.proof_consensus = this.proof_consensus.toString("hex");
    }

    return value;
  }

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgConnectionOpenTry(
      value?.client_id,
      value?.previous_connection_id,
      value?.client_state,
      value?.counterparty,
      BigInt(value?.delay_period),
      value?.counterparty_versions,
      value?.proof_height,
      Buffer.from(value?.proof_init, "hex"),
      Buffer.from(value?.proof_client, "hex"),
      Buffer.from(value?.proof_consensus, "hex"),
      value?.consensus_height,
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
