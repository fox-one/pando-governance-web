declare namespace API {
  export interface GetProposalsParams {
    limit: number;
    offset: string;
  }

  export interface GetProposalsResponse {
    ts: string;
    data: {
      proposals: Proposal[];
    };
  }

  export interface GetProposalResponse {
    ts: string;
    data: Proposal;
  }

  export interface Asset {
    id: string;
    logo: string;
    name: string;
    symbol: string;
  }

  export interface User {
    avatar: string;
    home_url: string;
    id: string;
    name: string;
  }

  export enum ProposalStatus {
    Active = "active",
    Passed = "passed",
  }

  export interface Proposal {
    action: number;
    amount: string;
    app_id: string;
    asset_id: string;
    asset: Asset;
    created_at: string;
    creator: User;
    data: string;
    id: string;
    items: [
      {
        action: string;
        hint: string;
        key: string;
        value: string;
      },
    ];
    passed_at: string;
    votes: User[];
    status: ProposalStatus;
    title: string;
  }

  export interface MtgMember {
    name: string;
    id: string;
    avatar: string;
    admin: any[];
  }

  export interface App {
    avatar: string;
    id: string;
    members: MtgMember[];
    name: string;
    stat: {
      app_id: string;
      active_count: string;
      total_count: string;
    };
    threshold: number;
  }
}
