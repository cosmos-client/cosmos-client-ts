import { cosmosclient } from '../..';

describe('sdk', () => {
  it('sdk', async () => {
    expect.hasAssertions();
    const mnemonic = 'joke door law post fragile cruel torch silver siren mechanic flush surround';
    const privKey = await cosmosclient.generatePrivKeyFromMnemonic(mnemonic);

    expect(Buffer.from(privKey).toString('hex')).toStrictEqual('ef40ea14839c3ee5690336bb1f032870941dbb329fc0553132a4a109a022a391');
  });
});
