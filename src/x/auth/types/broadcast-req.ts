import { StdTx } from "./std-tx";

export type BroadcastReq = {
  tx: StdTx;
  mode: "sync" | "async" | "block";
};
