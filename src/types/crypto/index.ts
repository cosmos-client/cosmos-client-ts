import { cosmos } from '../../proto';
import { codec } from '../codec';
import './ed25519';
import './multisig';
import './secp256k1';

export * from './key';

codec.register('/cosmos.crypto.ed25519.PrivKey', cosmos.crypto.ed25519.PrivKey);
codec.register('/cosmos.crypto.ed25519.PubKey', cosmos.crypto.ed25519.PubKey);
codec.register('/cosmos.crypto.secp256k1.PrivKey', cosmos.crypto.secp256k1.PrivKey);
codec.register('/cosmos.crypto.secp256k1.PubKey', cosmos.crypto.secp256k1.PubKey);
codec.register('/cosmos.crypto.multisig.LegacyAminoPubKey', cosmos.crypto.multisig.LegacyAminoPubKey);
