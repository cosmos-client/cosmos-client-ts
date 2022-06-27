import cosmosclient from '..';

describe('compact-bit-array', () => {
  it('elems', async () => {
    expect.hasAssertions();

    const array = cosmosclient.proto.cosmos.crypto.multisig.v1beta1.CompactBitArray.from([true, true]);

    expect(array?.extra_bits_stored).toBe(2);
    expect(Buffer.from(array?.elems!).toString('base64')).toBe('wA==');
  });
});
