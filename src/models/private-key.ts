import * as bip32 from 'bip32';
import * as bip39 from 'bip39';
import * as bitcoinjs from 'bitcoinjs-lib'
import * as crypto from 'crypto';
import * as secp256k1 from 'secp256k1';
import { PublicKey } from "./public-key";
import { StdSignDoc } from '../x/auth/stdtx';
import { bip32FullFundraiserPath } from '../cosmos-sdk/address';
import { PubKeySecp256k1 } from '../tendermint/crypto/secp256k1';
import { SignedTx } from '../x/auth/signed-tx';

export class PrivateKey extends PublicKey {
  private _privateKey: Buffer;

  constructor(
    privateKey: Buffer
  ) {
    const ecPair = bitcoinjs.ECPair.fromPrivateKey(privateKey, { compressed: false });
    super(ecPair.publicKey);

    this._privateKey = privateKey;
  }

  public static async fromBip39Mnemonic(mnemonic: string) {
    const seed = await bip39.mnemonicToSeed(mnemonic);
    const node = bip32.fromSeed(seed);
    const child = node.derivePath(bip32FullFundraiserPath);

    return new this(child.privateKey!);
  }

  private _sign(message: string) {
    const hash = crypto.createHash('sha256').update(message).digest('hex');
    const buf = Buffer.from(hash, 'hex');
    const signObj = secp256k1.sign(buf, this._privateKey);
    const signatureBase64 = signObj.signature.toString('base64');

    return signatureBase64;
  }

  public sign(stdSignDoc: StdSignDoc, modeType = "sync") {
    const signature = this._sign(JSON.stringify(stdSignDoc));

    const signedTx: SignedTx = {
      tx: {
        msg: stdSignDoc.msgs,
        fee: stdSignDoc.fee,
        signatures: [
          {
            signature: signature,
            pub_key: new PubKeySecp256k1(this.base64PublicKey)
          }
        ],
        memo: stdSignDoc.memo
      },
      mode: modeType
    };

    return signedTx;
  }
}
