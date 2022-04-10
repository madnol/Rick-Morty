import { AxiosRequestConfig } from 'axios';

export const paramArrayFormatter = (config: AxiosRequestConfig) => {
  const { params = {} } = config;
  const newParams = Object.entries(params).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: Array.isArray(value)
        ? `[${value.map(el => `"${el}"`).join(',')}]`
        : value,
    }),
    {},
  );
  return { ...config, params: newParams };
};
