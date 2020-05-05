import { CosmosSDK } from "../../cosmos-sdk";
import {
  GovernanceApi,
  ParamChangeProposalReq,
  PostProposalReq,
  DepositReq,
  VoteReq,
} from "../../api";
import { AccAddress } from "../../types";
import { StdTx } from "../auth";

export function parametersDepositGet(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url).govParametersDepositGet();
}

export function parametersTallyingGet(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url).govParametersTallyingGet();
}

export function parametersVotingGet(sdk: CosmosSDK) {
  return new GovernanceApi(undefined, sdk.url).govParametersVotingGet();
}

export function proposalsGet(
  sdk: CosmosSDK,
  voter?: AccAddress,
  depositor?: AccAddress,
  status?: "deposit_period" | "voting_period" | "passed" | "rejected",
) {
  return new GovernanceApi(undefined, sdk.url).govProposalsGet(
    voter?.toBech32(),
    depositor?.toBech32(),
    status,
  );
}

export function proposalsParamChangePost(
  sdk: CosmosSDK,
  req: ParamChangeProposalReq,
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    sdk.instancifyObjectWithoutAminoJSON<StdTx>(
      StdTx,
      new GovernanceApi(undefined, sdk.url).govProposalsParamChangePost(req),
    ),
  );
}

export function proposalsPost(sdk: CosmosSDK, req: PostProposalReq) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new GovernanceApi(undefined, sdk.url).govProposalsPost(req),
  );
}

export function proposalsProposalIdDepositsDepositorGet(
  sdk: CosmosSDK,
  proposalID: string,
  depositor: AccAddress,
) {
  return new GovernanceApi(
    undefined,
    sdk.url,
  ).govProposalsProposalIdDepositsDepositorGet(
    proposalID,
    depositor.toBech32(),
  );
}

export function proposalsProposalIdDepositsGet(
  sdk: CosmosSDK,
  proposalID: string,
) {
  return new GovernanceApi(
    undefined,
    sdk.url,
  ).govProposalsProposalIdDepositsGet(proposalID);
}

export function proposalsProposalIdDepositsPost(
  sdk: CosmosSDK,
  proposalID: string,
  req: DepositReq,
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new GovernanceApi(undefined, sdk.url).govProposalsProposalIdDepositsPost(
      proposalID,
      req,
    ),
  );
}

export function proposalsProposalIdGet(sdk: CosmosSDK, proposalID: string) {
  return new GovernanceApi(undefined, sdk.url).govProposalsProposalIdGet(
    proposalID,
  );
}

export function proposalsProposalIdProposerGet(
  sdk: CosmosSDK,
  proposalID: string,
) {
  return new GovernanceApi(
    undefined,
    sdk.url,
  ).govProposalsProposalIdProposerGet(proposalID);
}

export function proposalsProposalIdTallyGet(
  sdk: CosmosSDK,
  proposalID: string,
) {
  return new GovernanceApi(undefined, sdk.url).govProposalsProposalIdTallyGet(
    proposalID,
  );
}

export function proposalsProposalIdVotesGet(
  sdk: CosmosSDK,
  proposalID: string,
) {
  return new GovernanceApi(undefined, sdk.url).govProposalsProposalIdVotesGet(
    proposalID,
  );
}

export function proposalsProposalIdVotesPost(
  sdk: CosmosSDK,
  proposalID: string,
  req: VoteReq,
) {
  return sdk.instancifyObjectWithoutAminoJSON<StdTx>(
    StdTx,
    new GovernanceApi(undefined, sdk.url).govProposalsProposalIdVotesPost(
      proposalID,
      req,
    ),
  );
}

export function proposalsProposalIdVotesVoterGet(
  sdk: CosmosSDK,
  proposalID: string,
  voter: AccAddress,
) {
  return new GovernanceApi(
    undefined,
    sdk.url,
  ).govProposalsProposalIdVotesVoterGet(proposalID, voter.toBech32());
}
