import { codec } from "../../../codec";
import { PrivKeyEd25519, PubKeyEd25519 } from "./ed25519";
import { PrivKeySecp256k1, PubKeySecp256k1 } from "./secp256k1";

export * from "./key";
export * from "./ed25519";
// export * from './multisig'
export * from "./secp256k1";

// Register codec
codec.registerCodec(
  PrivKeyEd25519["@type"],
  PrivKeyEd25519,
  PrivKeyEd25519.fromJSON,
);
codec.registerCodec(
  PubKeyEd25519["@type"],
  PubKeyEd25519,
  PubKeyEd25519.fromJSON,
);
codec.registerCodec(
  PrivKeySecp256k1["@type"],
  PrivKeySecp256k1,
  PrivKeySecp256k1.fromJSON,
);
codec.registerCodec(
  PubKeySecp256k1["@type"],
  PubKeySecp256k1,
  PubKeySecp256k1.fromJSON,
);
