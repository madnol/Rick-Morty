import { TOKEN_STORAGE_KEY } from './storage.token.const';

let cachedToken: string | null;

export const getToken = () => {
  if (cachedToken) {
    return cachedToken;
  }
  try {
    cachedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
    return cachedToken;
  } catch (e) {
    console.warn(e);
    return null;
  }
};

export const setToken = (newToken: string) => {
  try {
    localStorage.setItem(TOKEN_STORAGE_KEY, newToken);
    cachedToken = newToken;
  } catch (e) {
    console.warn(e);
  }
};
