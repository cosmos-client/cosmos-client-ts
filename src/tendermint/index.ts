import { PrivKeyEd25519, PubKeyEd25519 } from "./types/ed25519";
import { PrivKeySecp256k1, PubKeySecp256k1 } from "./types/secp256k1";
import { PrivKeySr25519, PubKeySr25519 } from "./types/sr25519";
import { codec } from "../codec";

export * as tendermint from "./module";
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
codec.registerCodec(
  "tendermint/PrivKeySr25519",
  PrivKeySr25519,
  PrivKeySr25519.fromJSON,
);
codec.registerCodec(
  "tendermint/PubKeySr25519",
  PubKeySr25519,
  PubKeySr25519.fromJSON,
);
