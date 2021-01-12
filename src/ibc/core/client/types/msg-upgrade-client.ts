import { Any } from "../../../../cosmos/types/any";
import { AccAddress, Msg } from "../../../../cosmos/types";
import { codec } from "../../../../codec";

/**
 *
 */
export class MsgUpgradeClient implements Msg {
  static "@type": "/ibc.core.client.v1.MsgUpgradeClient";
  "@type": "/ibc.core.client.v1.MsgUpgradeClient";

  constructor(
    public client_id?: string,
    public client_state?: Any,
    public consensus_state?: Any,
    public proof_upgrade_client?: Buffer,
    public proof_upgrade_consensus_state?: Buffer,
    public signer?: AccAddress,
  ) {}

  toJSON() {
    const value: any = { ...this };
    if (this.proof_upgrade_client) {
      value.proof_upgrade_client = this.proof_upgrade_client.toString();
    }
    if (this.proof_upgrade_consensus_state) {
      value.proof_upgrade_consensus_state = this.proof_upgrade_consensus_state.toString();
    }

    return value;
  }

  /**
   *
   * @param value
   */
  static fromJSON(value: any) {
    return new MsgUpgradeClient(
      value?.client_id,
      value?.client_state,
      value?.consensus_state,
      Buffer.from(value?.proof_upgrade_client, "hex"),
      Buffer.from(value?.proof_upgrade_consensus_state, "hex"),
      AccAddress.fromBech32(value?.signer),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
