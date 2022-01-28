export enum ProposalStatus {
  Active = "active",
  Passed = "passed",
}

export const ProposalStatusMeta = {
  [ProposalStatus.Active]: {
    text: "active",
  },
  [ProposalStatus.Passed]: {
    text: "passed",
  },
};

export function getProposalStatusMeta(status: ProposalStatus) {
  return ProposalStatusMeta[status] || { text: "-", icon: "" };
}
