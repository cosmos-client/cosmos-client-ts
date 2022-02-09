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

    expect(address1.toString()).toBe('ununifi1aqt94lggum9v9xhuyppaawtjwra76mj8ds76p6');
    expect(address2.toString()).toBe('ununifi14ynfqqa6j5k3kcqm2ymf3l66d9x07ysx73ll7g');
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

  it('accPubkey', async () => {
    expect.hasAssertions();
    const mnemonic =
      'chest flight brain grocery flock elephant gloom gaze diet girl subway again extra spider monitor kiss explain paper beauty ordinary ship dry oxygen shield';
    const privKey = new proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic(mnemonic),
    });
    const accPubkey = cosmosclient.AccPubkey.fromPrivateKey(privKey);

    expect(accPubkey.toString()).toBe('ununifipub1addwnpepq0u4zl9r2x4ks82mjetexffsdduruqkmmtmqnx68dfkuy2yr275e53rn0e4');
  });

  it('decode_encode', async () => {
    //pubkey from CLI vs encoded decoded pubkey from CLI
    expect.hasAssertions();
    const pubkeyStr = 'ununifipub1addwnpepq0u4zl9r2x4ks82mjetexffsdduruqkmmtmqnx68dfkuy2yr275e53rn0e4';
    const { words } = bech32.decode(pubkeyStr);
    const pubkeyDecode = new Uint8Array(bech32.fromWords(words));
    const pubkeyEncodeTemp = bech32.toWords(Buffer.from(pubkeyDecode));
    const pubkeyEncode = bech32.encode('ununifipub', pubkeyEncodeTemp);

    expect(pubkeyEncode).toBe(pubkeyStr);
  });

  it('chk Unit8Array', async () => {
    //pubkey from CLI vs decoded pubkey from CLI
    expect.hasAssertions();
    const pubkeyStr = 'ununifipub1q0u4zl9r2x4ks82mjetexffsdduruqkmmtmqnx68dfkuy2yr275e5hz89ue';
    const { words } = bech32.decode(pubkeyStr);
    const pubkeyDecode = new Uint8Array(bech32.fromWords(words));
    console.log('pubkey_byte_from_decode', pubkeyDecode);

    //
    const mnemonic =
      'chest flight brain grocery flock elephant gloom gaze diet girl subway again extra spider monitor kiss explain paper beauty ordinary ship dry oxygen shield';
    const privKey = new proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic(mnemonic),
    });
    const pubkeyUint8Array = privKey.pubKey().bytes();
    console.log('privkey_byte', privKey.bytes());
    console.log('privkey_byte(hex)', Buffer.from(privKey.bytes()).toString('hex'));
    console.log('pubkey_byte_from_privkey', pubkeyUint8Array);

    expect(words).toBe(bech32.toWords(Buffer.from(pubkeyUint8Array)));
  });

  it('starport', async () => {
    //starport CLI
    expect.hasAssertions();

    const mnemonic =
      'enlist salt butter wealth prison people main benefit exhaust knock breeze wagon vote cloud cream tourist major caught carbon main below net float habit';
    const pubkeySecp256k1 = '0301DC2818F675A3CC39B8F41C73CB3F98D257DBBB8994D933518F57494A6FC74D';
    const addressCLI = 'cosmos1edh2rptgahn6cf53eldujnjym4g5wy97qs02gg';

    const privKey = new proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic(mnemonic),
    });
    console.log('pubkey_byte_from_privkey (starport)', privKey.pubKey().bytes());

    const pubKeyHex = Buffer.from(privKey.pubKey().bytes()).toString('HEX');
    expect(pubKeyHex).toBe(pubkeySecp256k1);

    const address = cosmosclient.AccAddress.fromPublicKey(privKey.pubKey());
    expect(address).toBe(addressCLI);
  });
});
