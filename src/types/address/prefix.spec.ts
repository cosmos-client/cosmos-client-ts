import { cosmosclient, proto } from '../..';
import { setBech32Prefix } from './config';

describe('address', () => {
  it('prefix', async () => {
    expect.hasAssertions();

    setBech32Prefix({
      accAddr: 'jpyx',
      accPub: 'jpyxpub',
      valAddr: 'jpyxvaloper',
      valPub: 'jpyxvaloperpub',
      consAddr: 'jpyxvalcons',
      consPub: 'jpyxvalconspub',
    });
    const privKey = new proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic('joke door law post fragile cruel torch silver siren mechanic flush surround'),
    });
    const pubKey = privKey.pubKey();
    const address = cosmosclient.AccAddress.fromPublicKey(pubKey);

    expect(address.toString().startsWith('jpyx')).toBeTruthy();
  });
});
