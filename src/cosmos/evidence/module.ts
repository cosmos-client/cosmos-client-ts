import { QueryApi } from "../../generated/api";
import { CosmosClient } from "../../cosmos-sdk";

export function allEvidence(
  sdk: CosmosClient,
  paginationKey?: string,
  paginationOffset?: bigint,
  paginationLimit?: bigint,
  paginationCountTotal?: boolean,
) {
  return new QueryApi(undefined, sdk.url).allEvidence(
    paginationKey,
    paginationOffset?.toString(),
    paginationLimit?.toString(),
    paginationCountTotal,
  );
}

export function evidence(sdk: CosmosClient, evidenceHash: string) {
  return new QueryApi(undefined, sdk.url).evidence(evidenceHash);
}
