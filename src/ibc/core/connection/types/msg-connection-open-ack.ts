import { codec } from "../../../../codec";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { Any } from "../../../../cosmos/types/any";
import { Height } from "../../client/types";
import { Version } from "./version";

/**
 *
 */
export class MsgConnectionOpenAck implements Msg {
  static "@type" = "/ibc.core.connection.v1.MsgConnectionOpenAck";
  "@type" = "/ibc.core.connection.v1.MsgConnectionOpenAck";

  constructor(
    public connection_id?: string,
    public counterparty_connection_id?: string,
    public version?: Version,
    public client_state?: Any,
    public proof_height?: Height,
    public proof_try?: Buffer,
    public proof_client?: Buffer,
    public proof_consensus?: Buffer,
    public consensus_height?: Height,
    public signer?: AccAddress,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.proof_try) {
      value.proof_try = this.proof_try.toString("hex");
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
    return new MsgConnectionOpenAck(
      value?.connection_id,
      value?.counterparty_connection_id,
      value?.version,
      value?.client_state,
      value?.proof_height,
      Buffer.from(value?.proof_try, "hex"),
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
