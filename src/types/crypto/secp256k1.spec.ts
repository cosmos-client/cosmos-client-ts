import { proto, cosmosclient } from '../..';
import * as crypto from 'crypto';
import * as secp256k1 from 'secp256k1';

describe('secp256k1', () => {
  it('verify', () => {
    expect.hasAssertions();
    const bytes = crypto.randomBytes(32);
    const key = new proto.cosmos.crypto.secp256k1.PrivKey({ key: bytes });
    const pubkey = key.pubKey();
    const address = cosmosclient.AccAddress.fromPublicKey(pubkey);
    const str = address.toString();

    console.log(str);

    const data = 'hogefugafoobar';
    const msg = Buffer.from(data, 'utf-8');

    const hash = crypto.createHash('sha256').update(msg).digest();
    const signature = secp256k1.ecdsaSign(hash, bytes).signature;
    const pbk = secp256k1.publicKeyCreate(bytes)!;
    expect(secp256k1.ecdsaVerify(signature, hash, pbk)).toBeTruthy();

    const sig = key.sign(msg);

    expect(pubkey.verify(msg, sig)).toBeTruthy();
  });
});
