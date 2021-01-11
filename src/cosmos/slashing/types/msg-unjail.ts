import { Msg } from "../../types/msg";
import { ValAddress } from "../../types/address/val-address";
import { codec } from "../../../codec";

export class MsgUnjail implements Msg {
  static "@type": "/cosmos.slashing.v1beta1.MsgUnjail";
  "@type": "/cosmos.slashing.v1beta1.MsgUnjail";

  /**
   * @param address
   */
  constructor(public address: ValAddress) {}

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgUnjail(ValAddress.fromBech32(value.address));
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
