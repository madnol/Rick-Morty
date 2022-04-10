import { AxiosInstance } from 'axios';

export type ApiFactoryClients<T extends string = string> = Record<
  T,
  AxiosInstance
>;
