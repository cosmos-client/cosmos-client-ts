import { codec } from "../../../../codec";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { Height } from "../../client/types";
import { Packet } from "./packet";

/**
 *
 */
export class MsgAcknowledgement implements Msg {
  static "@type": "/ibc.core.channel.v1.MsgAcknowledgement";
  "@type": "/ibc.core.channel.v1.MsgAcknowledgement";

  /**
   *
   * @param packet
   * @param acknowledgement
   * @param proof_acked
   * @param proof_height
   * @param signer
   */
  constructor(
    public packet?: Packet,
    public acknowledgement?: Buffer,
    public proof_acked?: Buffer,
    public proof_height?: Height,
    public signer?: AccAddress,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.acknowledgement) {
      value.acknowledgement = this.acknowledgement.toString("hex");
    }
    if (this.proof_acked) {
      value.proof_acked = this.proof_acked.toString("hex");
    }

    return value;
  }

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgAcknowledgement(
      value?.packer,
      Buffer.from(value?.acknowledgement, "hex"),
      Buffer.from(value?.proof_acked, "hex"),
      value?.proof_height,
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
