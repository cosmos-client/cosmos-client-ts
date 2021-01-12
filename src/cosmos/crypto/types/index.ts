import { codec } from "../../../codec";
import { PrivKeyEd25519, PubKeyEd25519 } from "./ed25519";
import { PrivKeySecp256k1, PubKeySecp256k1 } from "./secp256k1";

export * from "./key";
export * from "./ed25519";
// export * from './multisig'
export * from "./secp256k1";

// Register codec
codec.register(
  PrivKeyEd25519["@type"],
  PrivKeyEd25519,
  PrivKeyEd25519.fromJSON,
);
codec.register(PubKeyEd25519["@type"], PubKeyEd25519, PubKeyEd25519.fromJSON);
codec.register(
  PrivKeySecp256k1["@type"],
  PrivKeySecp256k1,
  PrivKeySecp256k1.fromJSON,
);
codec.register(
  PubKeySecp256k1["@type"],
  PubKeySecp256k1,
  PubKeySecp256k1.fromJSON,
);
