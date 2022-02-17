import { proto, cosmosclient } from '../..';
import { setBech32Prefix } from './../address/config';
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

  it('secp256k1_accPubkey_cosmos', async () => {
    expect.hasAssertions();

    //input mnemonic
    const mnemonic =
      'chest flight brain grocery flock elephant gloom gaze diet girl subway again extra spider monitor kiss explain paper beauty ordinary ship dry oxygen shield';
    const privKey = new proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic(mnemonic),
    });
    const pubkey = privKey.pubKey();
    console.log('accPubSp', pubkey.accPubkey());
    console.log('toStringSp', typeof pubkey.toString(), pubkey.toString());

    //check
    expect(pubkey.accPubkey()).toBe('cosmospub1addwnpepq0u4zl9r2x4ks82mjetexffsdduruqkmmtmqnx68dfkuy2yr275e53rn0e4');
  });

  it('secp256k1_accPubkey_ununifi', async () => {
    expect.hasAssertions();

    //set prfix for test
    setBech32Prefix({
      accAddr: 'ununifi',
      accPub: 'ununifipub',
      valAddr: 'ununifivaloper',
      valPub: 'ununifivaloperpub',
      consAddr: 'ununifivalcons',
      consPub: 'ununifivalconspub',
    });

    //input mnemonic
    const mnemonic =
      'chest flight brain grocery flock elephant gloom gaze diet girl subway again extra spider monitor kiss explain paper beauty ordinary ship dry oxygen shield';
    const privKey = new proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic(mnemonic),
    });
    const pubkey = privKey.pubKey();
    console.log('accPubSp', pubkey.accPubkey());
    console.log('toStringSp', typeof pubkey.toString(), pubkey.toString());

    //check
    expect(pubkey.accPubkey()).toBe('ununifipub1addwnpepq0u4zl9r2x4ks82mjetexffsdduruqkmmtmqnx68dfkuy2yr275e53rn0e4');
  });
});
