import { WebSocketSubject } from 'rxjs/webSocket';

type BaseSchema = {
  id: '1';
  jsonrpc: '2.0';
};

export type RequestSchema = BaseSchema & {
  method: 'subscribe' | 'unsubscribe' | 'unsubscribe_all';
  params: string[];
};

export type ResponseSchema = BaseSchema & { result?: any; error?: string };

export function connect(url: string) {
  const ws = new WebSocketSubject<RequestSchema | ResponseSchema>({
    url: `${url}/websocket`,
  });

  return ws;
}
