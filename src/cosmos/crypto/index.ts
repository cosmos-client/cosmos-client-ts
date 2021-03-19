import { codec } from '../../codec';
import { ed25519, secp256k1 } from './types';

export * from './types';

codec.register('/cosmos.crypto.ed25519.PrivKey', ed25519.PrivKey, ed25519.PrivKey.fromObject);
codec.register('/cosmos.crypto.ed25519.PubKey', ed25519.PubKey, ed25519.PubKey.fromObject);
codec.register('/cosmos.crypto.secp256k1.PrivKey', secp256k1.PrivKey, secp256k1.PrivKey.fromObject);
codec.register('/cosmos.crypto.secp256k1.PubKey', secp256k1.PubKey, secp256k1.PubKey.fromObject);
