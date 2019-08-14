import { PubKeySecp256k1 } from "./pub-key";
import * as secp256k1 from 'tiny-secp256k1';
import { verify } from "tiny-secp256k1";

describe('PubKeySecp256k1', () => {
    let pubkey: PubKeySecp256k1(pubkey);

    it('署名がこの公開鍵からつくられたものか検証する', () => {
        expect(verify).toEqual(secp256k1.verify(buffer, signature, this.pubKey))
    });

    it('JSON.stringify時に参照される', () => {

        expect().toEqual();
    });
});