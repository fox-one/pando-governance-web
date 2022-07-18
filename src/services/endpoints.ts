import Http from "@foxone/utils/http";

export default function(http: Http) {
  return {
    getApps() {
      return http.get("/apps");
    },

    getProposals(params: API.GetProposalsParams): Promise<API.GetProposalsResponse> {
      return http.get("/proposals", { params });
    },

    getProposal(id: string): Promise<API.GetProposalResponse> {
      return http.get(`/proposals/${id}`);
    },

    getProfile() {
      return http.get("https://api.mixin.one/me");
    },

    getAsset(id: string) {
      return http.get(`https://api.mixin.one/network/assets/${id}`);
    },
  };
}
