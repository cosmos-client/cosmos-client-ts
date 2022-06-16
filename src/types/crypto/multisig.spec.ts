import { proto, cosmosclient } from '../..';

describe('multisig', () => {
  it('multisig_address', async () => {
    expect.hasAssertions();

    const multisig = {
      '@type': '/cosmos.crypto.multisig.LegacyAminoPubKey',
      threshold: 2,
      public_keys: [
        { '@type': '/cosmos.crypto.secp256k1.PubKey', key: 'Ao5FhZ7DUmgy3w4ZYvckW8BU8hR7DtMlsmbB5Doi14Va' },
        { '@type': '/cosmos.crypto.secp256k1.PubKey', key: 'AhjJM0+S28UIJs5LuIh/ekQpaQJ+B9Zeki8KNXYFVSqs' },
      ],
    };
    const publicKey = cosmosclient.codec.protoJSONToInstance(multisig) as proto.cosmos.crypto.multisig.LegacyAminoPubKey;
    console.log(publicKey);

    const multisigAddress = cosmosclient.AccAddress.fromPublicKey(publicKey);

    expect(multisigAddress.toString()).toBe('cosmos1t4ke3vkqtd0dpnmerd5e4vlvmgccq7j6rjyf45');
  });
});
