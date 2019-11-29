import { Amino } from "../../common/amino";
import { PubKeySecp256k1 } from "./secp256k1/pub-key";
import { PrivKeySecp256k1 } from "./secp256k1/priv-key";
import { PrivKeyEd25519 } from "./ed25519/priv-key";
import { PubKeyEd25519 } from "./ed25519/pub-key";

Amino.RegisterConcrete('tendermint/PubKeySecp256k1', PubKeySecp256k1);
Amino.RegisterConcrete("tendermint/PrivKeySecp256k1", PrivKeySecp256k1);
Amino.RegisterConcrete('tendermint/PrivKeyEd25519', PrivKeyEd25519);
Amino.RegisterConcrete("tendermint/PubKeyEd25519", PubKeyEd25519);
