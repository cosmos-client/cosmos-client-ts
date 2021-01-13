import { Any } from "google-protobuf/google/protobuf/any_pb";

export type AnyI = {
  "@type": string;
  pack(): Any;
} & unknown;
