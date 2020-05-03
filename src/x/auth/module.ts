import { CosmosSDK } from "../../cosmos-sdk";
import { PrivKey } from "../../tendermint";
import { StdTx } from "./types/std-tx";

/**
 *
 * @param privKey
 * @param stdTx
 * @param accountNumber
 * @param sequence
 */
export function signStdTx(
  sdk: CosmosSDK,
  privKey: PrivKey,
  stdTx: StdTx,
  accountNumber: number,
  sequence: number,
) {
  const signBytes = stdTx.getSignBytes(sdk.chainID, accountNumber, sequence);
  const signature = {
    signature: privKey.sign(signBytes).toString("base64"),
    pub_key: privKey.getPubKey(),
  };

  const newStdTx = new StdTx(
    stdTx.msg,
    stdTx.fee,
    stdTx.signatures,
    stdTx.memo,
  );
  newStdTx.signatures.push(signature);

  return newStdTx;
}
