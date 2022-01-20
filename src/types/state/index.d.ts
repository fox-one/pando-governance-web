declare namespace State {
  export interface Proposal {
    proposals: API.Proposal[];
    pagination: API.Pagination;
  }

  export interface App {
    initing: boolean;
    settings: {
      dark: boolean;
    };
  }

  export interface Auth {
    token: string;
    channel: string;
  }
}
