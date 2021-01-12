import { codec } from "../../../../codec";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { Height } from "../../client/types";
import { Packet } from "./packet";

/**
 *
 */
export class MsgRecvPacket implements Msg {
  static "@type": "/ibc.core.channel.v1.MsgRecvPacket";
  "@type": "/ibc.core.channel.v1.MsgRecvPacket";

  constructor(
    public packet?: Packet,
    public proof_commitment?: Buffer,
    public proof_height?: Height,
    public signer?: AccAddress,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.proof_commitment) {
      value.proof_commitment = this.proof_commitment.toString("hex");
    }

    return value;
  }

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgRecvPacket(
      value?.packet,
      Buffer.from(value?.proof_commitment, "hex"),
      value?.proof_height,
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
