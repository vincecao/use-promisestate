import { SearchParams } from 'ohmyfetch';

export type UseFetchOptions = {
  method?: string;
  params?: SearchParams;
  body?: RequestInit['body'] | Record<string, any>;
  headers?: { key: string; value: string }[];
  baseURL?: string;
};

export type UseFetch<DataT> = {
  data: DataT | null;
  pending: boolean;
  refresh: (() => Promise<void>) | undefined;
  error: Error | boolean;
};