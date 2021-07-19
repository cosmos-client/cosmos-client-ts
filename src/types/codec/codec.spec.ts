import { proto, cosmosclient } from '../..';

describe('codec', () => {
  it('unpack', () => {
    expect.hasAssertions();
    const res = {
      data: {
        account: {
          '@type': '/cosmos.auth.v1beta1.BaseAccount',
          address: 'jpyx10lcj22kzftvnduchatmnsnhfljeky5ghd398wt',
          pub_key: { '@type': '/cosmos.crypto.secp256k1.PubKey', key: 'AvSf2U/B23UZKvLTD0E4xqJ33Nn0Z552nXCkkwEfleiu' },
          account_number: '0',
          sequence: '13',
        },
      },
      status: 200,
      statusText: 'OK',
      headers: { 'content-length': '315', 'content-type': 'application/json' },
      config: {
        url: 'http://a.test.jpyx.lcnem.net:1317/cosmos/auth/v1beta1/accounts/jpyx10lcj22kzftvnduchatmnsnhfljeky5ghd398wt',
        method: 'get',
        headers: { Accept: 'application/json, text/plain, */*' },
        transformRequest: [null],
        transformResponse: [null],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
      },
      request: {
        __zone_symbol__xhrSync: false,
        __zone_symbol__xhrURL: 'http://a.test.jpyx.lcnem.net:1317/cosmos/auth/v1beta1/accounts/jpyx10lcj22kzftvnduchatmnsnhfljeky5ghd398wt',
        __zone_symbol__readystatechangefalse: [
          {
            type: 'eventTask',
            state: 'scheduled',
            source: 'XMLHttpRequest.addEventListener:readystatechange',
            zone: 'angular',
            runCount: 6,
          },
        ],
        __zone_symbol__abortfalse: [
          { type: 'eventTask', state: 'scheduled', source: 'XMLHttpRequest.addEventListener:abort', zone: 'angular', runCount: 0 },
        ],
        __zone_symbol__errorfalse: [
          { type: 'eventTask', state: 'scheduled', source: 'XMLHttpRequest.addEventListener:error', zone: 'angular', runCount: 0 },
        ],
        __zone_symbol__timeoutfalse: [
          { type: 'eventTask', state: 'scheduled', source: 'XMLHttpRequest.addEventListener:timeout', zone: 'angular', runCount: 0 },
        ],
        __zone_symbol__xhrScheduled: true,
        __zone_symbol__xhrErrorBeforeScheduled: false,
        __zone_symbol__xhrTask: { type: 'macroTask', state: 'notScheduled', source: 'XMLHttpRequest.send', zone: 'angular', runCount: 0 },
      },
    };

    const unpacked = cosmosclient.codec.unpackCosmosAny(res.data.account);
    if (!(unpacked instanceof proto.cosmos.auth.v1beta1.BaseAccount)) {
      throw Error('');
    }

    console.log(unpacked);

    const key = cosmosclient.codec.unpackAny(unpacked.pub_key);
    console.log(key);

    expect(true).toBeTruthy();
  });
});
