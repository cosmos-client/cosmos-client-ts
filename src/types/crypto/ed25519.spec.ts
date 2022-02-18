import { proto, cosmosclient } from '../..';
import { setBech32Prefix } from './../address/config';
import * as crypto from 'crypto';

describe('ed25519', () => {
  const bytes = crypto.randomBytes(32);
  const key = new proto.cosmos.crypto.ed25519.PrivKey({ key: bytes });
  const address = cosmosclient.AccAddress.fromPublicKey(key.pubKey());
  const str = address.toString();

  console.log(bytes.toString('hex'));
  console.log(str);

  it('ed25519_accPubkey_cosmos', async () => {
    expect.hasAssertions();

    // info from local test chain
    const pub_key = {
      '@type': '/cosmos.crypto.ed25519.PubKey',
      'key': '+q8dUtYeppa3ycdKFIc1Dl9OtVLbTVlXoBpmsOO4p40=',
    };
    const priv_key = {
      '@type': '/cosmos.crypto.ed25519.PrivKey',
      'key': 'Q7RecOq++QctQfKXqBOnrvMIT81sC8KaIE+HY+ZfsOn6rx1S1h6mlrfJx0oUhzUOX061UttNWVegGmaw47injQ==',
    };
    const publicKeyUnpackUnunifi = cosmosclient.codec.unpackCosmosAny(pub_key) as cosmosclient.PubKey;
    const privateKeyUnpackUnunifi = cosmosclient.codec.unpackCosmosAny(priv_key) as cosmosclient.PrivKey;
    //console.log('cosmosAny_lenght', publicKeyUnpackUnunifi.bytes().length, privateKeyUnpackUnunifi.bytes().length);
    //console.log('cosmosAny_toStringEd', publicKeyUnpackUnunifi.toString(), privateKeyUnpackUnunifi.toString());

    //check
    expect(publicKeyUnpackUnunifi.accPubkey()).toBe(privateKeyUnpackUnunifi.pubKey().accPubkey());
  });

  it('ed25519_accPubkey_ununifi', async () => {
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

    // info from local test chain (.gaia)
    const pub_key = {
      '@type': '/cosmos.crypto.ed25519.PubKey',
      'key': '+q8dUtYeppa3ycdKFIc1Dl9OtVLbTVlXoBpmsOO4p40=',
    };
    const priv_key = {
      '@type': '/cosmos.crypto.ed25519.PrivKey',
      'key': 'Q7RecOq++QctQfKXqBOnrvMIT81sC8KaIE+HY+ZfsOn6rx1S1h6mlrfJx0oUhzUOX061UttNWVegGmaw47injQ==',
    };

    const publicKeyUnpackCosmos = cosmosclient.codec.unpackCosmosAny(pub_key) as cosmosclient.PubKey;
    const privateKeyUnpackCosmos = cosmosclient.codec.unpackCosmosAny(priv_key) as cosmosclient.PrivKey;
    //console.log('cosmosAny_lenght', publicKeyUnpackCosmos.bytes().length, privateKeyUnpackCosmos.bytes().length);
    console.log('cosmosAny_toStringEd', publicKeyUnpackCosmos.accPubkey(), privateKeyUnpackCosmos.toString());

    //check1
    expect(publicKeyUnpackCosmos.accPubkey()).toBe(privateKeyUnpackCosmos.pubKey().accPubkey());

    //check2
    expect(publicKeyUnpackCosmos.accPubkey()).toBe('ununifivalconspub1zcjduepql2h365kkr6nfdd7fca9pfpe4pe05ad2jmdx4j4aqrfntpcac57xssk7egh');
  });
});
