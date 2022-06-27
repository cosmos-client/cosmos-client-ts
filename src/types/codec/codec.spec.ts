import cosmosclient from '../..';
import { google } from '../../proto';
import { goTimeStringToJsDate, jsDateToGoTimeString, jsDateToProtobufTimestamp, protobufTimestampToJsDate } from './module';
import Long from 'long';

describe('codec', () => {
  it('txBuilder', async () => {
    expect.hasAssertions();

    const sdk = new cosmosclient.CosmosSDK('http://localhost:1317', 'testchain');

    const privKey = new cosmosclient.proto.cosmos.crypto.secp256k1.PrivKey({
      key: await cosmosclient.generatePrivKeyFromMnemonic('joke door law post fragile cruel torch silver siren mechanic flush surround'),
    });
    const pubKey = privKey.pubKey();
    const address = cosmosclient.AccAddress.fromPublicKey(pubKey);

    expect(address.toString()).toBe('cosmos14ynfqqa6j5k3kcqm2ymf3l66d9x07ysxgnvdyx');

    const fromAddress = address;
    const toAddress = address;

    // build tx
    const msgSend = new cosmosclient.proto.cosmos.bank.v1beta1.MsgSend({
      from_address: fromAddress.toString(),
      to_address: toAddress.toString(),
      amount: [{ denom: 'token', amount: '1' }],
    });

    const txBody = new cosmosclient.proto.cosmos.tx.v1beta1.TxBody({
      messages: [cosmosclient.codec.instanceToProtoAny(msgSend)],
    });
    const authInfo = new cosmosclient.proto.cosmos.tx.v1beta1.AuthInfo({
      signer_infos: [
        {
          public_key: cosmosclient.codec.instanceToProtoAny(pubKey),
          mode_info: {
            single: {
              mode: cosmosclient.proto.cosmos.tx.signing.v1beta1.SignMode.SIGN_MODE_DIRECT,
            },
          },
          sequence: Long.fromNumber(0),
        },
      ],
      fee: {
        gas_limit: Long.fromString('200000'),
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
    if (!(unpacked instanceof cosmosclient.proto.cosmos.auth.v1beta1.BaseAccount)) {
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
    if (!(unpacked instanceof cosmosclient.proto.cosmos.auth.v1beta1.BaseAccount)) {
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

  it('protoJSONToInstanceTxMsg', async () => {
    expect.hasAssertions();
    const sdk = new cosmosclient.CosmosSDK('https://ununifi-alpha-test-v2.cauchye.net:1318', 'ununifi-alpha-test-v2');

    const hashSend = "AF78448BFBF4725FA9EF8382B52743210B6EBC3B02BE26C2BCB288202F0DE73B" //msgSend 100uguu
    const txResponce = await cosmosclient.rest.tx.getTx(sdk, hashSend).then((res) => res.data)
    const messase = txResponce.tx?.body?.messages?.[0]
    const cast = cosmosclient.codec.castProtoJSONOfProtoAny(messase)
    const instance = cosmosclient.codec.protoJSONToInstance(cast)
    expect((instance as any).constructor.name).toBe("MsgSend");
    console.log("cast-msgSend", cast)
    console.log("instanceMsgSend", instance)

    const hashSubmit = "8B21739E3568727D0C30E469910359643E2B85E88B0B223E644566692721F5D8" //msgSubmitProposal
    const txResponceS = await cosmosclient.rest.tx.getTx(sdk, hashSubmit).then((res) => res.data)
    const instanceProposal = cosmosclient.codec.protoJSONToInstance(cosmosclient.codec.castProtoJSONOfProtoAny(txResponceS.tx?.body?.messages?.[0]))
    expect((instanceProposal as any).constructor.name).toBe("MsgSubmitProposal");
    console.log("insetanceProposal", instanceProposal)

    const hashDeposit = "41DDF3BB9F1275163CEA9B168925E9410E1686A34ECEEDC58EBCEF81219423CD" //msgDeposit
    const txResponceDeposit = await cosmosclient.rest.tx.getTx(sdk, hashDeposit).then((res) => res.data)
    const instanceDeposit = cosmosclient.codec.protoJSONToInstance(cosmosclient.codec.castProtoJSONOfProtoAny(txResponceDeposit.tx?.body?.messages?.[0]))
    expect((instanceDeposit as any).constructor.name).toBe("MsgDeposit");
    console.log("instanceDeposit", instanceDeposit)

    const hashVoteWeighted = "66CB9D610E6C65892FF9720534E1AB3D29068B4FF0EAA69554389BC45995205A" //msgVoteWeighted
    const txResponceVoteWeighted = await cosmosclient.rest.tx.getTx(sdk, hashVoteWeighted).then((res) => res.data)
    const instanceVoteWeighted = cosmosclient.codec.protoJSONToInstance(cosmosclient.codec.castProtoJSONOfProtoAny(txResponceVoteWeighted.tx?.body?.messages?.[0]))
    expect((instanceVoteWeighted as any).constructor.name).toBe("MsgVoteWeighted");
    console.log("instanceVoteWeighted", instanceVoteWeighted)

    const hashVote = "0363D6FA41F145B375E14966E6AED59AC4016BBED8EB7EFA1CEB37149BC9D553" //msgVote
    const txResponceVote = await cosmosclient.rest.tx.getTx(sdk, hashVote).then((res) => res.data)
    const instanceVote = cosmosclient.codec.protoJSONToInstance(cosmosclient.codec.castProtoJSONOfProtoAny(txResponceVote.tx?.body?.messages?.[0]))
    expect((instanceVote as any).constructor.name).toBe("MsgVote");
    console.log("instanceVote", instanceVote)
  });
});