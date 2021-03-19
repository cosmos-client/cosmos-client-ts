import * as crypto from 'crypto';
import { cosmosclient } from '../..';

describe('ed25519', () => {
  const bytes = crypto.randomBytes(32);
  const key = new cosmosclient.ed25519.PrivKey({ key: bytes });
  const address = cosmosclient.AccAddress.fromPublicKey(key.pubKey());
  const str = address.toString();

  console.log(bytes.toString('hex'));
  console.log(str);
});
