import * as crypto from 'crypto';
import { cosmosclient } from '../..';

describe('secp256k1', () => {
  const bytes = crypto.randomBytes(32);
  const key = new cosmosclient.secp256k1.PrivKey({ key: bytes });
  const address = cosmosclient.AccAddress.fromPublicKey(key.pubKey());
  const str = address.toString();

  console.log(bytes.toString('hex'));
  console.log(str);
});
