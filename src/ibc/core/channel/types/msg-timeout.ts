import { codec } from "../../../../codec";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { Height } from "../../client/types";
import { Packet } from "./packet";

/**
 *
 */
export class MsgTimeout implements Msg {
  static "@type": "/ibc.core.channel.v1.MsgTimeout";
  "@type": "/ibc.core.channel.v1.MsgTimeout";

  constructor(
    public packet?: Packet,
    public proof_unreceived?: Buffer,
    public proof_height?: Height,
    public next_sequence_recv?: bigint,
    public signer?: AccAddress,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.proof_unreceived) {
      value.proof_unreceived = this.proof_unreceived.toString("hex");
    }
    if (this.next_sequence_recv) {
      value.next_sequence_recv = this.next_sequence_recv.toString();
    }

    return value;
  }

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgTimeout(
      value?.packet,
      Buffer.from(value?.proof_unreceived, "hex"),
      value?.proof_height,
      BigInt(value?.next_sequence_recv),
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
