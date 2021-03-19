import { codec } from '../codec';
import * as ed25519 from './ed25519';
import * as secp256k1 from './secp256k1';

export * from './key';
export * as ed25519 from './ed25519';
export * as secp256k1 from './secp256k1';

codec.register('/cosmos.crypto.ed25519.PrivKey', ed25519.PrivKey, ed25519.PrivKey.fromObject);
codec.register('/cosmos.crypto.ed25519.PubKey', ed25519.PubKey, ed25519.PubKey.fromObject);
codec.register('/cosmos.crypto.secp256k1.PrivKey', secp256k1.PrivKey, secp256k1.PrivKey.fromObject);
codec.register('/cosmos.crypto.secp256k1.PubKey', secp256k1.PubKey, secp256k1.PubKey.fromObject);
