import { cosmosclient } from '../..';

describe('sdk', () => {
  it('sdk', async () => {
    expect.hasAssertions();
    const json = `
    {
      "@type": "/cosmos.auth.v1beta1.BaseAccount",
      "address": "osmo1auheafvzrej6ljjdz9vqt6caxzz7rewaqknqpc",
      "pub_key": {
          "@type": "/cosmos.crypto.multisig.LegacyAminoPubKey",
          "threshold": 4,
          "public_keys": [
              {
                  "@type": "/cosmos.crypto.secp256k1.PubKey",
                  "key": "AgRqhR0KbyL3kTxdtsW2pLvZmKVQQp4JHFNGK54PFQBi"
              },
              {
                  "@type": "/cosmos.crypto.secp256k1.PubKey",
                  "key": "As/ouf6C1qz4n+Csqt9ZqML9VnFG88gluMIt1KiKZYgG"
              },
              {
                  "@type": "/cosmos.crypto.secp256k1.PubKey",
                  "key": "AxZ0qBLKcUoiNcEOYwy1gStAYGiDZBfZwki3gqv6AiOB"
              },
              {
                  "@type": "/cosmos.crypto.secp256k1.PubKey",
                  "key": "Ap5caxs652g/S0lFkLivfeG7a8KPFH0JV9xX+Cvgh+nw"
              },
              {
                  "@type": "/cosmos.crypto.secp256k1.PubKey",
                  "key": "AhH+cRacMEEJ8xjU0vulJbJ4rpIVdDDUvyWoj+4ao+wS"
              },
              {
                  "@type": "/cosmos.crypto.secp256k1.PubKey",
                  "key": "Azb7O3HKDZhZIoe7he1OkmrNKs8I/im+Cx4hztwv5xMj"
              },
              {
                  "@type": "/cosmos.crypto.secp256k1.PubKey",
                  "key": "AgJ0b5zwlNPxj67gtGDE0CYu4kepxKikUwuYM+o/P6Bu"
              }
          ]
      },
      "account_number": "430633",
      "sequence": "1"
    }
`;
    const obj = JSON.parse(json);
    const unpacked = cosmosclient.codec.protoJSONToInstance(obj);

    console.log(unpacked);

    expect(true).toBeTruthy();
  });
});
