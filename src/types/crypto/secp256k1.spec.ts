import * as crypto from 'crypto';
import { cosmosclient } from '../..';
import * as secp256k1 from 'tiny-secp256k1';

describe('secp256k1', () => {
  it('verify', () => {
    expect.hasAssertions();
    const bytes = crypto.randomBytes(32);
    const key = new cosmosclient.secp256k1.PrivKey({ key: bytes });
    const pubkey = key.pubKey();
    const address = cosmosclient.AccAddress.fromPublicKey(pubkey);
    const str = address.toString();

    console.log(str);

    const data = 'hogefugafoobar';
    const msg = Buffer.from(data, 'utf-8');

    const hash = crypto.createHash('sha256').update(msg).digest();
    const signature = secp256k1.sign(hash, bytes);
    const pbk = secp256k1.pointFromScalar(bytes)!;
    expect(secp256k1.verify(hash, pbk, signature)).toBeTruthy();

    const sig = key.sign(msg);

    expect(pubkey.verify(msg, sig)).toBeTruthy();
  });
});
