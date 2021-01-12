import { Any } from "../../../../cosmos/types/any";
import { HeightI } from "./height";

export type ClientState = Any & {
  clientState(): string;
  getLatestHeight(): HeightI;
};
