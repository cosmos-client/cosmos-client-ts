import * as crypto from 'crypto';
import { proto, cosmosclient } from '../..';

describe('ed25519', () => {
  const bytes = crypto.randomBytes(32);
  const key = new proto.cosmos.crypto.ed25519.PrivKey({ key: bytes });
  const address = cosmosclient.AccAddress.fromPublicKey(key.pubKey());
  const str = address.toString();

  console.log(bytes.toString('hex'));
  console.log(str);
});
