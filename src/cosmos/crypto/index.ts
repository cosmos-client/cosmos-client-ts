import { codec } from "../../codec";
import { cosmos } from "../../proto";

export * from "./types";

codec.register(
  "/cosmos.crypto.ed25519.PrivKey",
  cosmos.crypto.ed25519.PrivKey,
  cosmos.crypto.ed25519.PrivKey.fromObject,
);
codec.register(
  "/cosmos.crypto.ed25519.PubKey",
  cosmos.crypto.ed25519.PubKey,
  cosmos.crypto.ed25519.PubKey.fromObject,
);
codec.register(
  "/cosmos.crypto.secp256k1.PrivKey",
  cosmos.crypto.secp256k1.PrivKey,
  cosmos.crypto.secp256k1.PrivKey.fromObject,
);
codec.register(
  "/cosmos.crypto.secp256k1.PubKey",
  cosmos.crypto.secp256k1.PubKey,
  cosmos.crypto.secp256k1.PubKey.fromObject,
);
