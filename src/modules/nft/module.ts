import { StdTx } from "../../cosmos/auth";
import { CosmosSDK } from "../../cosmos-sdk";
import Axios, { AxiosPromise } from "axios";
import { BaseReq } from "../../api";
import { AccAddress } from "../../cosmos/types";
import { codec } from "../../codec";

export function supplyDenomGet(sdk: CosmosSDK, denom: string) {
  return sdk.wrapResponseWithHeight(
    Axios.get(`${sdk.url}/nft/supply/${denom}`),
  );
}

export function ownerDelegatorAddrGet(
  sdk: CosmosSDK,
  delegatorAddress: AccAddress,
) {
  return sdk.wrapResponseWithHeight(
    Axios.get(`${sdk.url}/nft/owner/${delegatorAddress.toBech32()}`),
  );
}

export function ownerDelegatorAddrCollectionDenomGet(
  sdk: CosmosSDK,
  delegatorAddress: AccAddress,
  denom: string,
) {
  return sdk.wrapResponseWithHeight(
    Axios.get(
      `${sdk.url}/nft/owner/${delegatorAddress.toBech32()}/collection/${denom}`,
    ),
  );
}

export function collectionDenomGet(sdk: CosmosSDK, denom: string) {
  return sdk.wrapResponseWithHeight(
    Axios.get(`${sdk.url}/nft/collection/${denom}`),
  );
}

export function DenomsGet(sdk: CosmosSDK) {
  return sdk.wrapResponseWithHeight(Axios.get(`${sdk.url}/nft/denoms`));
}

export function collectionDenomNftIdGet(
  sdk: CosmosSDK,
  denom: string,
  id: string,
) {
  return sdk.wrapResponseWithHeight(
    Axios.get(`${sdk.url}/collection/${denom}/nft/${id}`),
  );
}

export function mintPost(
  sdk: CosmosSDK,
  req: {
    base_req: BaseReq;
    recipient: string;
    denom: string;
    id: string;
    tokenURI: string;
  },
) {
  return Axios.post(`${sdk.url}/nfts/mint`, req).then((res) => {
    res.data = codec.fromJSONString(JSON.stringify(res.data));
    return res;
  }) as AxiosPromise<StdTx>;
}

export function transferPost(
  sdk: CosmosSDK,
  req: {
    base_req: BaseReq;
    denom: string;
    id: string;
    recipient: string;
  },
) {
  return Axios.post(`${sdk.url}/nfts/transfer`, req).then((res) => {
    res.data = codec.fromJSONString(JSON.stringify(res.data));
    return res;
  }) as AxiosPromise<StdTx>;
}

export function collectionDenomNftIdMetadataPut(
  sdk: CosmosSDK,
  req: {
    base_req: BaseReq;
    denom: string;
    id: string;
    tokenURI: string;
  },
) {
  return Axios.put(
    `${sdk.url}/nfts/collection/${req.denom}/nft/${req.id}/metadata`,
    req,
  ).then((res) => {
    res.data = codec.fromJSONString(JSON.stringify(res.data));
    return res;
  }) as AxiosPromise<StdTx>;
}

export function collectionDenomNftIdBurnPut(
  sdk: CosmosSDK,
  req: {
    base_req: BaseReq;
    denom: string;
    id: string;
  },
) {
  return Axios.put(
    `${sdk.url}/nfts/collection/${req.denom}/nft/${req.id}/burn`,
    req,
  ).then((res) => {
    res.data = codec.fromJSONString(JSON.stringify(res.data));
    return res;
  }) as AxiosPromise<StdTx>;
}
