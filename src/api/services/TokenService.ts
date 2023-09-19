import { TokenCache, TokenStore } from '@commercetools/sdk-client-v2';
import { TOKEN_NAME } from '@/api/constants';

class TokenService implements TokenCache {
  private tokenStore: TokenStore;

  private localStorage: Storage = window.localStorage;

  private refreshToken = '';

  constructor() {
    const json =
      this.localStorage.getItem(TOKEN_NAME) ??
      '{"token":"","expirationTime":0,"refreshToken":""}';
    this.tokenStore = JSON.parse(json) as TokenStore;
    const { refreshToken } = this.tokenStore;
    this.refreshToken = refreshToken ?? this.refreshToken;
  }

  public get(): TokenStore {
    return this.tokenStore;
  }

  public set(data: TokenStore): void {
    this.refreshToken = data.refreshToken ?? this.refreshToken;
    this.tokenStore = { ...data, refreshToken: this.refreshToken };
    const json = JSON.stringify(this.tokenStore);
    this.localStorage.setItem('refreshToken', this.refreshToken);
    this.localStorage.setItem(TOKEN_NAME, json);
  }

  public removeToken(): void {
    this.localStorage.removeItem('refreshToken');
    this.localStorage.removeItem(TOKEN_NAME);
  }
}

export default TokenService;
