export interface ClientStyleContextData {
  reset: () => void;
}

export interface ServerStyleContextData {
  key: string;
  ids: Array<string>;
  css: string;
}
