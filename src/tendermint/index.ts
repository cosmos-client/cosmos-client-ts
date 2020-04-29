import {
  PrivKeyEd25519,
  PubKeyEd25519,
  PrivKeySecp256k1,
  PubKeySecp256k1,
} from "./crypto";
import { codec } from "../codec";
import * as tendermint from "./api";

export { tendermint };
export * from "./crypto";
export * from "./types";

// Register codec
codec.registerCodec(
  "tendermint/PrivKeyEd25519",
  PrivKeyEd25519,
  PrivKeyEd25519.fromJSON,
);
codec.registerCodec(
  "tendermint/PubKeyEd25519",
  PubKeyEd25519,
  PubKeyEd25519.fromJSON,
);
codec.registerCodec(
  "tendermint/PrivKeySecp256k1",
  PrivKeySecp256k1,
  PrivKeySecp256k1.fromJSON,
);
codec.registerCodec(
  "tendermint/PubKeySecp256k1",
  PubKeySecp256k1,
  PubKeySecp256k1.fromJSON,
);
