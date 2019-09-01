import { PubKey } from "../../../types/tendermint/pub-key";

export interface StdSignature {
  pub_key: PubKey;
  signature: string;
}