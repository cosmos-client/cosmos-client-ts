import { CosmosSDK } from "../cosmos-sdk";
import { Amino } from "../codec";
import { PrivKeyEd25519, PubKeyEd25519 } from "./crypto/ed25519";
import { PrivKeySecp256k1, PubKeySecp256k1 } from "./crypto/secp256k1";

export * from "./types";

Amino.RegisterCodec(
  "tendermint/PrivKeyEd25519",
  PrivKeyEd25519,
  PrivKeyEd25519.fromJSON
);
Amino.RegisterCodec(
  "tendermint/PubKeyEd25519",
  PubKeyEd25519,
  PubKeyEd25519.fromJSON
);
Amino.RegisterCodec(
  "tendermint/PrivKeySecp256k1",
  PrivKeySecp256k1,
  PrivKeySecp256k1.fromJSON
);
Amino.RegisterCodec(
  "tendermint/PubKeySecp256k1",
  PubKeySecp256k1,
  PubKeySecp256k1.fromJSON
);

/**
 * Tendermint Rest API
 */
export namespace Tendermint {
  /**
   * /tendermint/status
   * @param sdk
   */
  export function getStatus(sdk: CosmosSDK) {
    return sdk.get<{}>(`/tendermint/status`);
  }
}
