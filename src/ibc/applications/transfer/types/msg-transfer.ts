import { Coin } from "../../../../api";
import { codec } from "../../../../codec";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { Height } from "../../../core/client/types/height";

export class MsgTransfer implements Msg {
  static "@type": "/ibc.applications.transfer.v1.MsgTransfer";
  "@type": "/ibc.applications.transfer.v1.MsgTransfer";

  constructor(
    public source_port?: string,
    public source_channel?: string,
    public token?: Coin,
    public sender?: AccAddress,
    public receiver?: AccAddress,
    public timeout_height?: Height,
    public timeout_timestamp?: bigint,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.timeout_timestamp) {
      value.timeout_timestamp = this.timeout_timestamp.toString();
    }

    return value;
  }

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgTransfer(
      value?.source_port,
      value?.source_channel,
      value?.token,
      AccAddress.fromBech32(value?.sender),
      AccAddress.fromBech32(value?.receiver),
      Height.fromJSON(value?.timeout_height),
      BigInt(value?.timeout_timestamp),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
