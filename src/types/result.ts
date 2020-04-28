import { Tx } from "./tx";
import { StringEvent } from "./events";
import { codec } from "../codec";

export type ABCIMessageLog = {
  msg_index: number;
  log: string;
  events: StringEvent[];
};

export type TxResponse = {
  height: number;
  txhash: string;
  codespace?: string;
  code?: number;
  data?: string;
  raw_log?: string;
  logs?: ABCIMessageLog[];
  info?: string;
  gas_wanted?: number;
  gas_used?: number;
  tx?: Tx | codec.AminoWrapping;
  timestamp?: string;
};

export type SearchTxsResult = {
  total_count: number;
  count: number;
  page_number: number;
  page_total: number;
  limit: number;
  txs: TxResponse[];
};
