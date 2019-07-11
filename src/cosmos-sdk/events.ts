export interface Attribute {
  key: string;
  value?: string;
}

export const AttributeKey = {
  action: 'action',
  module: 'module',
  sender: 'sender'
};

export interface StringEvent {
  type?: string;
  attributes?: Attribute[];
}

export const EventType = {
  message: 'message'
};
