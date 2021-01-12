import { Any } from "../../../../cosmos/types/any";
import { Height } from "../../client/types";

export type PacketI = Any & {
  getSequence(): bigint | null;
  getTimeoutHeight(): Height | null;
  getTimeoutTimestamp(): bigint | null;
  getSourcePort(): string;
  getSourceChannel(): string;
  getDestPort(): string;
  getDestChannel(): string;
  getData(): Buffer | null;
};

export class Packet implements PacketI {
  static "@type" = "/ibc.core.channel.v1.Packet";
  "@type" = "/ibc.core.channel.v1.Packet";

  constructor(
    public sequence?: bigint,
    public source_port?: string,
    public source_channel?: string,
    public destination_port?: string,
    public destination_channel?: string,
    public data?: Buffer,
    public timeout_height?: Height,
    public timeout_timestamp?: bigint,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.sequence) {
      value.sequence = this.sequence.toString();
    }
    if (this.data) {
      value.data = this.data.toString("hex");
    }
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
    return new Packet(
      BigInt(value?.sequence),
      value?.source_port,
      value?.source_channel,
      value?.destination_port,
      value?.destination_channel,
      Buffer.from(value?.data, "hex"),
      value?.timeout_height,
      BigInt(value?.timeout_timestamp),
    );
  }

  getSequence() {
    return this.sequence || null;
  }

  getTimeoutHeight() {
    return this.timeout_height || null;
  }

  getTimeoutTimestamp() {
    return this.timeout_timestamp || null;
  }

  getSourcePort() {
    return this.source_port || "";
  }

  getSourceChannel() {
    return this.source_channel || "";
  }

  getDestPort() {
    return this.destination_port || "";
  }

  getDestChannel() {
    return this.destination_channel || "";
  }

  getData() {
    return this.data || null;
  }
}
