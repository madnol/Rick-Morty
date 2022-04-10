import axios, { AxiosRequestConfig } from 'axios';

import { RICK_AND_MORTY_URL } from 'core/config/api';
import { paramArrayFormatter } from 'core/http/interceptors/param-array-formatter';

export const axiosConfig: AxiosRequestConfig = {
  baseURL: RICK_AND_MORTY_URL,
};

const rickAndMortyHttpClient = axios.create(axiosConfig);

rickAndMortyHttpClient.interceptors.request.use(paramArrayFormatter);

export { rickAndMortyHttpClient };
