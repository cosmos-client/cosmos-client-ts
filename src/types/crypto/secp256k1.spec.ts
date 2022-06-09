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

    //packed publickey from gaia CLI
    const pubKeyCLI = {
      '@type': '/cosmos.crypto.secp256k1.PubKey',
      key: 'A8Pj5Q8u3hShw3+oFc4nGrZvKl4avTDHW1m9GiI1fm5x',
    };
    const publicKeyCLI = cosmosclient.codec.protoJSONToInstance(pubKeyCLI) as cosmosclient.PubKey;

    //publickey from mnemonic
    const mnemonic =
      'joy furnace inject spot engine source alpha turn east visa abstract cousin shell express weasel math perfect tiger quality camp mansion desert web jaguar';
    const privKey = new proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic(mnemonic),
    });
    const pubkey = privKey.pubKey();

    //check (encoded publickey from pack vs mnemonic )
    expect(pubkey.accPubkey()).toBe(publicKeyCLI.accPubkey());
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

    //publickey from mnemonic
    const mnemonic =
      'chest flight brain grocery flock elephant gloom gaze diet girl subway again extra spider monitor kiss explain paper beauty ordinary ship dry oxygen shield';
    const privKey = new proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic(mnemonic),
    });
    const pubkey = privKey.pubKey();

    //check (encoded publickey from mnemonic vs ununifid CLI condole )
    expect(pubkey.accPubkey()).toBe('ununifipub1addwnpepq0u4zl9r2x4ks82mjetexffsdduruqkmmtmqnx68dfkuy2yr275e53rn0e4');
  });
});
