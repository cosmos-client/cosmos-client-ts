import { cosmosclient, websocket } from '..';

function sleep(sec: number) {
  return new Promise((resolve, _) => {
    setTimeout(function () {
      resolve({});
    }, sec);
  });
}

describe('websocket', () => {
  it('websocker', async () => {
    expect.hasAssertions();
    const sdk = new cosmosclient.CosmosSDK('ws://localhost:26657', 'testchain');
    const ws = websocket.connect(sdk);

    ws.next({
      id: '1',
      jsonrpc: '2.0',
      method: 'subscribe',
      params: ["tm.event = 'NewBlock'"],
    });

    ws.subscribe((data) => {
      if ('result' in data) {
        console.log(data);
      }
      if ('error' in data) {
        console.error(data);
      }
    });

    expect(true).toBeTruthy();

    await sleep(5000);

    ws.complete();
  });
});
