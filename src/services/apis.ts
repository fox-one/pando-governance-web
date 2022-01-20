import Http from "@foxone/utils/http";

export default function(http: Http) {
  return {
    getProposals(params: API.GetProposalsParams): Promise<API.GetProposalsResponse> {
      return http.get("/proposals", { params });
    },

    getProposal(id: string): Promise<API.Proposal> {
      return http.get(`/proposal/${id}`);
    },
  };
}
