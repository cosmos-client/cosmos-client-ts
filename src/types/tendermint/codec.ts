import { Amino } from "../../common/amino";
import { PrivKeyEd25519 } from "./ed25519/priv-key";
import { PubKeyEd25519 } from "./ed25519/pub-key";
import { PrivKeySecp256k1 } from "./secp256k1/priv-key";
import { PubKeySecp256k1 } from "./secp256k1/pub-key";

Amino.RegisterCodec('tendermint/PrivKeyEd25519', PrivKeyEd25519, PrivKeyEd25519.fromJSON);
Amino.RegisterCodec("tendermint/PubKeyEd25519", PubKeyEd25519, PubKeyEd25519.fromJSON);
Amino.RegisterCodec("tendermint/PrivKeySecp256k1", PrivKeySecp256k1, PrivKeySecp256k1.fromJSON);
Amino.RegisterCodec('tendermint/PubKeySecp256k1', PubKeySecp256k1, PubKeySecp256k1.fromJSON);
