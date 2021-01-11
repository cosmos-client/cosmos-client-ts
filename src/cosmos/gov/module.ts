import { CosmosSDK } from "../../cosmos-sdk";
import {
  GovernanceApi,
  ParamChangeProposalReq,
  PostProposalReq,
  DepositReq,
  VoteReq,
} from "../../api";
import { AccAddress } from "../types";
import { StdTx } from "../auth";
import { codec } from "../../codec";
import { AxiosPromise } from "axios";

export function parametersDepositGet(sdk: CosmosSDK) {
  return sdk.wrapResponseWithHeight(
    new GovernanceApi(undefined, sdk.url).govParametersDepositGet(),
  );
}

export function parametersTallyingGet(sdk: CosmosSDK) {
  return sdk.wrapResponseWithHeight(
    new GovernanceApi(undefined, sdk.url).govParametersTallyingGet(),
  );
}

export function parametersVotingGet(sdk: CosmosSDK) {
  return sdk.wrapResponseWithHeight(
    new GovernanceApi(undefined, sdk.url).govParametersVotingGet(),
  );
}

export function proposalsGet(
  sdk: CosmosSDK,
  voter?: AccAddress,
  depositor?: AccAddress,
  status?: "deposit_period" | "voting_period" | "passed" | "rejected",
) {
  return sdk.wrapResponseWithHeight(
    new GovernanceApi(undefined, sdk.url).govProposalsGet(
      voter?.toBech32(),
      depositor?.toBech32(),
      status,
    ),
  );
}

export function proposalsParamChangePost(
  sdk: CosmosSDK,
  req: ParamChangeProposalReq,
) {
  return new GovernanceApi(undefined, sdk.url)
    .govProposalsParamChangePost(req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function proposalsPost(sdk: CosmosSDK, req: PostProposalReq) {
  return new GovernanceApi(undefined, sdk.url)
    .govProposalsPost(req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function proposalsProposalIdDepositsDepositorGet(
  sdk: CosmosSDK,
  proposalID: string,
  depositor: AccAddress,
) {
  return sdk.wrapResponseWithHeight(
    new GovernanceApi(
      undefined,
      sdk.url,
    ).govProposalsProposalIdDepositsDepositorGet(
      proposalID,
      depositor.toBech32(),
    ),
  );
}

export function proposalsProposalIdDepositsGet(
  sdk: CosmosSDK,
  proposalID: string,
) {
  return sdk.wrapResponseWithHeight(
    new GovernanceApi(undefined, sdk.url).govProposalsProposalIdDepositsGet(
      proposalID,
    ),
  );
}

export function proposalsProposalIdDepositsPost(
  sdk: CosmosSDK,
  proposalID: string,
  req: DepositReq,
) {
  return new GovernanceApi(undefined, sdk.url)
    .govProposalsProposalIdDepositsPost(proposalID, req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function proposalsProposalIdGet(sdk: CosmosSDK, proposalID: string) {
  return sdk.wrapResponseWithHeight(
    new GovernanceApi(undefined, sdk.url).govProposalsProposalIdGet(proposalID),
  );
}

export function proposalsProposalIdProposerGet(
  sdk: CosmosSDK,
  proposalID: string,
) {
  return sdk.wrapResponseWithHeight(
    new GovernanceApi(undefined, sdk.url).govProposalsProposalIdProposerGet(
      proposalID,
    ),
  );
}

export function proposalsProposalIdTallyGet(
  sdk: CosmosSDK,
  proposalID: string,
) {
  return sdk.wrapResponseWithHeight(
    new GovernanceApi(undefined, sdk.url).govProposalsProposalIdTallyGet(
      proposalID,
    ),
  );
}

export function proposalsProposalIdVotesGet(
  sdk: CosmosSDK,
  proposalID: string,
) {
  return sdk.wrapResponseWithHeight(
    new GovernanceApi(undefined, sdk.url).govProposalsProposalIdVotesGet(
      proposalID,
    ),
  );
}

export function proposalsProposalIdVotesPost(
  sdk: CosmosSDK,
  proposalID: string,
  req: VoteReq,
) {
  return new GovernanceApi(undefined, sdk.url)
    .govProposalsProposalIdVotesPost(proposalID, req)
    .then((res) => {
      res.data = codec.fromJSONString(JSON.stringify(res.data));
      return res;
    }) as AxiosPromise<StdTx>;
}

export function proposalsProposalIdVotesVoterGet(
  sdk: CosmosSDK,
  proposalID: string,
  voter: AccAddress,
) {
  return sdk.wrapResponseWithHeight(
    new GovernanceApi(undefined, sdk.url).govProposalsProposalIdVotesVoterGet(
      proposalID,
      voter.toBech32(),
    ),
  );
}
