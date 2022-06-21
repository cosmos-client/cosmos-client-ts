import { cosmosclient, proto, rest, websocket } from '.';

(window as any).Long = (window as any).cosmosclient = {
  ...cosmosclient,
  proto,
  rest,
  websocket,
};
