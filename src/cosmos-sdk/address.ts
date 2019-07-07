import * as bech32 from 'bech32';
import * as crypto from 'crypto';

const addressLength = 20;
const prefix = {
  main: 'cosmos',
  account: 'acc',
  validator: 'val',
  consensus: 'cons',
  public: 'pub',
  operator: 'oper',
  address: 'addr'
};
const bech32Prefix = {
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

  public static fromPublicKey(publicKey: Buffer) {
    const identifier = hash160(publicKey);

    const words = bech32.toWords(identifier);
    const address = bech32.encode('cosmos', words);

    return new AccAddress(address);
  }

  public static validateFormat(value: string): boolean {
    return value.length === addressLength && value.startsWith(bech32Prefix.accAddr);
  }
}

function hash160(buffer: Buffer): Buffer {
  const sha256Hash: Buffer = crypto.createHash('sha256')
    .update(buffer)
    .digest();
  try {
    return crypto.createHash('rmd160')
      .update(sha256Hash)
      .digest();
  } catch (err) {
    return crypto.createHash('ripemd160')
      .update(sha256Hash)
      .digest();
  }
}