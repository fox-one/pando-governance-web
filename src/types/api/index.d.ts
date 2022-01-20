declare namespace API {
  export interface Pagination {
    has_next: boolean;
    next_cursor: string;
  }

  export interface GetProposalsParams {
    limit: number;
    cursor: string;
  }

  export interface GetProposalsResponse {
    ts: string;
    data: {
      pagination: Pagination;
      proposals: Proposal[];
    };
  }

  export interface Proposal {
    action: number;
    amount: string;
    asset_id: string;
    created_at: string;
    creator: string;
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
    votes: string[];
  }
}
