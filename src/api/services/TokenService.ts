import { TokenStore } from '@commercetools/sdk-client-v2';
import { TOKEN_NAME } from '@/api/constants';

class TokenService {
  private localStorage: Storage = window.localStorage;

  public getToken(): TokenStore {
    const json =
      this.localStorage.getItem(TOKEN_NAME) ??
      '{"token":"","expirationTime":0,"refreshToken":""}';
    return JSON.parse(json) as TokenStore;
  }

  public setToken(data: TokenStore): void {
    const json = JSON.stringify(data);
    this.localStorage.setItem(TOKEN_NAME, json);
  }

  public removeToken(): void {
    this.localStorage.removeItem(TOKEN_NAME);
  }
}

export default TokenService;
