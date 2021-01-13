import { AnyI } from "../../../../codec/any";
import { HeightI } from "./height";

export type ClientState = AnyI & {
  clientState(): string;
  getLatestHeight(): HeightI;
};
