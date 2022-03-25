import { cosmosclient } from '../..';
import { setBech32Prefix } from './../address/config';

describe('ed25519', () => {
  it('ed25519_accPubkey_cosmos', async () => {
    expect.hasAssertions();

    // information from local test chain (/.mars/config/priv_validator_key.json)
    const pub_key = {
      '@type': '/cosmos.crypto.ed25519.PubKey',
      key: 'CqJssSo+a3LSQHKgbbqL/KTLeECZO/Jc3lrsQcY/2Po=',
    };
    const priv_key = {
      '@type': '/cosmos.crypto.ed25519.PrivKey',
      key: 'vGqFxQ10qeP98qJ/mdpcJpPTkc6uqI0dr9x6L9AFSEMKomyxKj5rctJAcqBtuov8pMt4QJk78lzeWuxBxj/Y+g==',
    };
    const publicKeyUnpack = cosmosclient.codec.unpackCosmosAny(pub_key) as cosmosclient.PubKey;
    const privateKeyUnpack = cosmosclient.codec.unpackCosmosAny(priv_key) as cosmosclient.PrivKey;

    //check1 (encoded public key from packed pubkey vs packed privkey )
    expect(publicKeyUnpack.accPubkey()).toBe(privateKeyUnpack.pubKey().accPubkey());
  });

  it('ed25519_accPubkey_ununifi', async () => {
    expect.hasAssertions();

    //set prefix for test
    setBech32Prefix({
      accAddr: 'ununifi',
      accPub: 'ununifipub',
      valAddr: 'ununifivaloper',
      valPub: 'ununifivaloperpub',
      consAddr: 'ununifivalcons',
      consPub: 'ununifivalconspub',
    });

    // information from local test chain (/.ununifid/config/priv_validator_key.json)
    const pub_key = {
      '@type': '/cosmos.crypto.ed25519.PubKey',
      key: '+q8dUtYeppa3ycdKFIc1Dl9OtVLbTVlXoBpmsOO4p40=',
    };
    const priv_key = {
      '@type': '/cosmos.crypto.ed25519.PrivKey',
      key: 'Q7RecOq++QctQfKXqBOnrvMIT81sC8KaIE+HY+ZfsOn6rx1S1h6mlrfJx0oUhzUOX061UttNWVegGmaw47injQ==',
    };
    const publicKeyUnpack = cosmosclient.codec.unpackCosmosAny(pub_key) as cosmosclient.PubKey;
    const privateKeyUnpack = cosmosclient.codec.unpackCosmosAny(priv_key) as cosmosclient.PrivKey;

    //check1 (encoded public key from packed pubkey vs packed privkey )
    expect(publicKeyUnpack.accPubkey()).toBe(privateKeyUnpack.pubKey().accPubkey());

    //check2 (encoded public key from packed pubkey vs ununifid show-validator command )
    expect(privateKeyUnpack.pubKey().accPubkey()).toBe(
      'ununifivalconspub1zcjduepql2h365kkr6nfdd7fca9pfpe4pe05ad2jmdx4j4aqrfntpcac57xssk7egh',
    );
  });
});
