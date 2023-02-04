/* eslint-disable jest/require-hook */
import { ServiceApi, BroadcastTxRequestModeEnum as BroadcastTxMode } from '../../openapi/api';
import { cosmos } from '../../proto';
import { codec } from '../../types';

export { BroadcastTxMode };

codec.register('/cosmos.tx.v1beta1.AuthInfo', cosmos.tx.v1beta1.AuthInfo);
codec.register('/cosmos.tx.v1beta1.Fee', cosmos.tx.v1beta1.Fee);
codec.register('/cosmos.tx.v1beta1.ModeInfo', cosmos.tx.v1beta1.ModeInfo);
codec.register('/cosmos.tx.v1beta1.SignDoc', cosmos.tx.v1beta1.SignDoc);
codec.register('/cosmos.tx.v1beta1.SignerInfo', cosmos.tx.v1beta1.SignerInfo);
codec.register('/cosmos.tx.v1beta1.Tx', cosmos.tx.v1beta1.Tx);
codec.register('/cosmos.tx.v1beta1.TxBody', cosmos.tx.v1beta1.TxBody);
codec.register('/cosmos.tx.v1beta1.TxRaw', cosmos.tx.v1beta1.TxRaw);
codec.registerConvertJSON(cosmos.tx.v1beta1.ModeInfo, (value) => {
  if (value?.single) {
    value.single.mode = cosmos.tx.signing.v1beta1.SignMode[value.single.mode];
  }
  return value;
});

export function v1beta1(
  url: string,
): Pick<ServiceApi, 'simulate' | 'getTx' | 'broadcastTx' | 'getTxsEvent' | 'getBlockWithTxs'> {
  return new ServiceApi(undefined, url);
}
