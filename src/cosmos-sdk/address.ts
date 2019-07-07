export const addressLength = 20;
export const bip32CoinType = 118;
export const bip32FullFundraiserPath = `m/44'/${bip32CoinType}'/0'/0/0`;

export const prefix = {
  main: 'cosmos',
  account: 'acc',
  validator: 'val',
  consensus: 'cons',
  public: 'pub',
  operator: 'oper',
  address: 'addr'
};

export const bech32Prefix = {
  accAddr: prefix.main,
  accPub: prefix.main + prefix.public,
  valAddr: prefix.main + prefix.validator + prefix.operator,
  valPub: prefix.main + prefix.validator + prefix.operator + prefix.public,
  consAddr: prefix.main + prefix.validator + prefix.consensus,
  consPub: prefix.main + prefix.validator + prefix.consensus + prefix.public
};

export class AccAddress extends String {
  constructor(value: string) {
    if (!AccAddress.validateFormat(value)) {
      throw Error();
    }
    super(value);
  }

  public static validateFormat(value: string): boolean {
    return value.length === addressLength && value.startsWith(bech32Prefix.accAddr);
  }
}