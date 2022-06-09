import { proto, cosmosclient } from '../..';
import { google } from '../../proto';
import { goTimeStringToJsDate, jsDateToGoTimeString, jsDateToProtobufTimestamp, protobufTimestampToJsDate } from './module';
import Long from 'long';

describe('codec', () => {
  it('txBuilder', async () => {
    expect.hasAssertions();

    const sdk = new cosmosclient.CosmosSDK('http://localhost:1317', 'testchain');

    const privKey = new proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic('joke door law post fragile cruel torch silver siren mechanic flush surround'),
    });
    const pubKey = privKey.pubKey();
    const address = cosmosclient.AccAddress.fromPublicKey(pubKey);

    expect(address.toString()).toBe('cosmos14ynfqqa6j5k3kcqm2ymf3l66d9x07ysxgnvdyx');

    const fromAddress = address;
    const toAddress = address;

    // build tx
    const msgSend = new proto.cosmos.bank.v1beta1.MsgSend({
      from_address: fromAddress.toString(),
      to_address: toAddress.toString(),
      amount: [{ denom: 'token', amount: '1' }],
    });

    const txBody = new proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.instanceToProtoAny(msgSend)],
    });
    const authInfo = new proto.cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.instanceToProtoAny(pubKey),
          mode_info: {
            single: {
              mode: proto.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
            },
          },
          sequence: cosmosclient.Long.fromNumber(0),
        },
      ],
      fee: {
        gas_limit: cosmosclient.Long.fromString('200000'),
      },
    });

    // sign
    const txBuilder = new cosmosclient.TxBuilder(sdk, txBody, authInfo);
    const signDocBytes = txBuilder.signDocBytes(0);
    txBuilder.addSignature(privKey.sign(signDocBytes));

    // broadcast
    const json = txBuilder.protoJSONStringify(2);
    console.log(json);

    expect(true).toBeTruthy();
  });

  it('protoJSONStringify', () => {
    expect.hasAssertions();

    const account = {
      '@type': '/cosmos.auth.v1beta1.BaseAccount',
      address: 'jpyx10lcj22kzftvnduchatmnsnhfljeky5ghd398wt',
      account_number: '0',
      pub_key: { '@type': '/cosmos.crypto.secp256k1.PubKey', key: 'AvSf2U/B23UZKvLTD0E4xqJ33Nn0Z552nXCkkwEfleiu' },
      sequence: '13',
    };

    const unpacked = cosmosclient.codec.protoJSONToInstance(account);
    if (!(unpacked instanceof proto.cosmos.auth.v1beta1.BaseAccount)) {
      throw Error('');
    }
    const json = cosmosclient.codec.instanceToProtoJSON(unpacked);
    console.log(json);

    expect(true).toBeTruthy();
  });

  it('protoJSONToInstance', () => {
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

    const unpacked = cosmosclient.codec.protoJSONToInstance(res.data.account);
    if (!(unpacked instanceof proto.cosmos.auth.v1beta1.BaseAccount)) {
      throw Error('');
    }

    console.log(unpacked);

    const key = cosmosclient.codec.protoAnyToInstance(unpacked.pub_key);
    console.log(key);

    expect(true).toBeTruthy();
  });

  it('goTimeStringToJsDate', () => {
    expect.hasAssertions();
    const originalGoTimeString = '2021-12-09T18:00:00+09:00';
    const resultJsDate = goTimeStringToJsDate(originalGoTimeString);
    const resultJsDateTimestamp = resultJsDate.toUTCString();
    const expectedDateTimestamp = new Date(2021, 11, 9, 18, 0, 0).toUTCString();
    expect(resultJsDateTimestamp).toBe(expectedDateTimestamp);
  });

  it('jsDateToGoTimeString', () => {
    expect.hasAssertions();
    const originalDate = new Date(2021, 11, 9, 18, 0, 0);
    const resultDateString = jsDateToGoTimeString(originalDate);
    expect(resultDateString).toBe('2021-12-09T18:00:00+09:00');
  });

  it('jsDateToProtobufTimestamp', () => {
    expect.hasAssertions();
    const originalDate = new Date(2021, 11, 9, 18, 0, 0);
    const protobufTimestamp = jsDateToProtobufTimestamp(originalDate);
    expect(protobufTimestamp.seconds.low).toBe(1639040400);
    expect(protobufTimestamp.seconds.high).toBe(0);
    expect(protobufTimestamp.seconds.unsigned).toBe(false);
  });

  it('protobufTimestampToJsDate', () => {
    expect.hasAssertions();
    const protobufTimestamp = new google.protobuf.Timestamp({
      seconds: Long.fromNumber(new Date(2021, 11, 9, 18, 0, 0).getTime() / 1000),
    });
    const date = protobufTimestampToJsDate(protobufTimestamp);
    expect(date.getFullYear()).toBe(2021);
    expect(date.getMonth()).toBe(11);
    expect(date.getDate()).toBe(9);
    expect(date.getHours()).toBe(18);
    expect(date.getMinutes()).toBe(0);
    expect(date.getSeconds()).toBe(0);
  });
});
