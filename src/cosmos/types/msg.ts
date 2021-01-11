import { Any } from "./any";

export type Msg = Any & {
  getSignBytes(): Buffer;
};
