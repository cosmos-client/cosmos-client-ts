import { codec } from "../../../codec";
import { Msg } from "../../types/msg";

export class MsgVerifyInvariant implements Msg {
  static "@type": "/cosmos.crisis.v1beta1.Msg/VerifyInvariant";
  "@type": "/cosmos.crisis.v1beta1.Msg/VerifyInvariant";

  /**
   *
   * @param sender
   * @param invariant_module_name
   * @param invariant_route
   */
  constructor(
    public sender?: string,
    public invariant_module_name?: string,
    public invariant_route?: string,
  ) {}

  /**
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgVerifyInvariant(
      value?.sender,
      value?.invariant_module_name,
      value?.invariant_route,
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
