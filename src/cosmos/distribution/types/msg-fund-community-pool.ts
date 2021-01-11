import { Coin } from "../../../api";
import { codec } from "../../../codec";
import { AccAddress } from "../../types";
import { Msg } from "../../types/msg";

export class MsgFundCommunityPool implements Msg {
  static "@type": "/cosmos.distribution.v1beta1.Msg/FundCommunityPool";
  "@type": "/cosmos.distribution.v1beta1.Msg/FundCommunityPool";

  constructor(public amount?: Coin[], public depositor?: AccAddress) {}

  static fromJSON(value: any) {
    return new MsgFundCommunityPool(
      value?.amount,
      AccAddress.fromBech32(value?.depositor),
    );
  }

  getSignBytes() {
    return Buffer.from(codec.sortJSON(JSON.stringify(this)));
  }
}
