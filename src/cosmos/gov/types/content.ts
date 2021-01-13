import { AnyI } from "../../../codec/any";

export type Content = AnyI & {
  getTitle(): string;
};
