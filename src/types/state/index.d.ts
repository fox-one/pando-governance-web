declare namespace State {
  export interface Proposal {
    proposals: API.Proposal[];
    hasNext: boolean;
  }

  export interface App {
    initing: boolean;
    settings: {
      dark: boolean;
    };
  }

  export interface Apps {
    apps: API.App[];
  }

  export interface Auth {
    token: string;
    channel: string;
  }
}
