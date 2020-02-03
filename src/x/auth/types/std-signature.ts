import { PubKey } from "../../../tendermint";

export interface StdSignature {
  pub_key: PubKey;
  signature: string;
}