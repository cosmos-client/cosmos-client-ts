import { CosmosSDK } from "../../cosmos-sdk";
import { BankApi, SendReq } from "../../api";
import { AccAddress } from "../../types";
import { codec } from "../../codec";
import { AxiosPromise } from "axios";
import { StdTx } from "../auth";

export function balancesAddressGet(sdk: CosmosSDK, address: AccAddress) {
  return sdk.wrapResponseWithHeight(
    new BankApi(undefined, sdk.url).bankBalancesAddressGet(address.toBech32()),
  );
}

export function accountsAddressTransfersPost(
  sdk: CosmosSDK,
  address: AccAddress,
  req: SendReq,
) {
  return new BankApi(undefined, sdk.url)
    .bankAccountsAddressTransfersPost(address.toBech32(), req)
    .then((res) =>
      codec.fromJSONString(JSON.stringify(res.data)),
    ) as AxiosPromise<StdTx>;
}
