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
    appbar: {
      title: string;
      style: string;
      show: boolean;
      back: boolean;
      extension: any;
      extensionHeight: number;
    };
  }

  export interface Apps {
    apps: API.App[];
  }

  export interface Auth {
    token: string;
    channel: string;
    profile: any;
  }

  export interface FSwap {
    assets: any[];
    pairs: any[];
  }

  export interface Page {
    index: {
      currentTab: string;
      currentKind: string;
    };
  }
}
