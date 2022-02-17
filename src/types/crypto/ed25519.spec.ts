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
    const address = '19647C2DC80B9A8C78A3BEA49A5878580235851F';
    const pub_key = {
      //type: 'tendermint/PubKeyEd25519',
      '@type': '/cosmos.crypto.ed25519.PubKey',
      //value: or pub_key:
      value: '+q8dUtYeppa3ycdKFIc1Dl9OtVLbTVlXoBpmsOO4p40=',
    };
    const priv_key = {
      '@type': '/cosmos.crypto.ed25519.PrivKey',
      //value: or priv_key:
      priv_key: 'Q7RecOq++QctQfKXqBOnrvMIT81sC8KaIE+HY+ZfsOn6rx1S1h6mlrfJx0oUhzUOX061UttNWVegGmaw47injQ==',
    };
    const publicKeyUnpackCosmos = cosmosclient.codec.unpackCosmosAny(pub_key) as cosmosclient.PubKey;
    const privateKeyUnpackCosmos = cosmosclient.codec.unpackCosmosAny(priv_key) as cosmosclient.PrivKey;
    console.log('cosmosAny', publicKeyUnpackCosmos.bytes().length, privateKeyUnpackCosmos.bytes().length);

    console.log('toStringEd', typeof privateKeyUnpackCosmos.toString(), publicKeyUnpackCosmos.toString());

    //check
    //!!! Need to get pubkey address with "cosmos" prefix !!!
    expect(publicKeyUnpackCosmos.accPubkey()).toBe('ununifipub1addwnpepq0u4zl9r2x4ks82mjetexffsdduruqkmmtmqnx68dfkuy2yr275e53rn0e4');
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

    //input mnemonic
    const mnemonic =
      'chest flight brain grocery flock elephant gloom gaze diet girl subway again extra spider monitor kiss explain paper beauty ordinary ship dry oxygen shield';
    const privKey = new proto.cosmos.crypto.ed25519.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic(mnemonic),
    });
    const pubkey = privKey.pubKey();
    console.log('accPubEd', pubkey.accPubkey());
    console.log('toStringEd', typeof pubkey.toString(), pubkey.toString());

    //check
    //!!! this public key is came from secp256k1 privatekey !!!
    expect(pubkey.accPubkey()).toBe('ununifipub1addwnpepq0u4zl9r2x4ks82mjetexffsdduruqkmmtmqnx68dfkuy2yr275e53rn0e4');
  });
});
