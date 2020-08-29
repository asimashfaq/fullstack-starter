export interface IResponseInfo<T> {
  page_info: IPagination;
  edges: T[];
}
export interface IPagination {
  has_more: boolean;
  total: number;
  limit: number;
  skip: number;
}

export interface IChangeResponseInfo<T> {
  edges: T[];
  modified: number;
}
