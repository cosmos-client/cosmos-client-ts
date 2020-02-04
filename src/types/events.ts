export type Attribute = {
  key: string;
  value?: string;
};

export type StringEvent = {
  type?: string;
  attributes?: Attribute[];
};

export type EventType = "message";

export type AttributeKey = "action" | "module" | "sender" | "amount";
