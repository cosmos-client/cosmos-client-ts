export type Any = {
  "@type": string;
} & unknown;

export type AnyOrMessage = Any | unknown;
