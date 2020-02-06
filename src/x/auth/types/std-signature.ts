import { PubKey } from "../../../tendermint";

export type StdSignature = {
  pub_key: PubKey;
  signature: string;
};
