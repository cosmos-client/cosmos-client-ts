import { proto, cosmosclient } from '../..';
import * as bech32 from 'bech32';
import * as crypto from 'crypto';

describe('address', () => {
  it('ed25519', () => {
    expect.hasAssertions();

    const bytes = new Uint8Array(crypto.randomBytes(32));
    const key = new proto.cosmos.crypto.ed25519.PrivKey({ key: bytes });
    const address = cosmosclient.AccAddress.fromPublicKey(key.pubKey());
    const str = address.toString();
    const revived = cosmosclient.AccAddress.fromString(str);

    expect(revived.toString()).toStrictEqual(str);

    const valAddress = cosmosclient.ValAddress.fromPublicKey(key.pubKey());

    expect(address.toString().split('1')[1]).toHaveLength(valAddress.toString().split('1')[1].length);
  });

  it('secp256k1', () => {
    expect.hasAssertions();

    const bytes = new Uint8Array(crypto.randomBytes(32));
    const key = new proto.cosmos.crypto.secp256k1.PrivKey({ key: bytes });
    const address = cosmosclient.AccAddress.fromPublicKey(key.pubKey());
    const str = address.toString();
    const revived = cosmosclient.AccAddress.fromString(str);

    expect(revived.toString()).toStrictEqual(str);

    const valAddress = cosmosclient.ValAddress.fromPublicKey(key.pubKey());

    expect(address.toString().split('1')[1]).toHaveLength(valAddress.toString().split('1')[1].length);
  });

  it('accaddress', async () => {
    expect.hasAssertions();
    const privKeyStr = 'ef40ea14839c3ee5690336bb1f032870941dbb329fc0553132a4a109a022a391';

    const privKey1 = new proto.cosmos.crypto.ed25519.PrivKey({
      key: Buffer.from(privKeyStr, 'hex'),
    });
    const privKey2 = new proto.cosmos.crypto.secp256k1.PrivKey({
      key: Buffer.from(privKeyStr, 'hex'),
    });

    const address1 = cosmosclient.AccAddress.fromPublicKey(privKey1.pubKey());
    const address2 = cosmosclient.AccAddress.fromPublicKey(privKey2.pubKey());

    console.log(address2.toString());

    expect(address1.toString()).toBe('cosmos1aqt94lggum9v9xhuyppaawtjwra76mj8mjdgm5');
    expect(address2.toString()).toBe('cosmos14ynfqqa6j5k3kcqm2ymf3l66d9x07ysxgnvdyx');
  });

  it('convert', async () => {
    expect.hasAssertions();
    const privKeyStr = 'ef40ea14839c3ee5690336bb1f032870941dbb329fc0553132a4a109a022a391';

    const privKey = new proto.cosmos.crypto.secp256k1.PrivKey({
      key: Buffer.from(privKeyStr, 'hex'),
    });

    const accAddress = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());
    const valAddress = cosmosclient.ValAddress.fromPublicKey(privKey.pubKey());

    expect(accAddress.toValAddress().toString()).toStrictEqual(valAddress.toString());
  });
});
