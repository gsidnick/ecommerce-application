import TokenService from '@/api/services/TokenService';

const localStorageMock = (function () {
  let store: Storage = {} as Storage;

  return {
    getItem(key: string) {
      return store[key];
    },

    setItem(key: string, value: string) {
      store[key] = value;
    },

    clear() {
      store = {} as Storage;
    },

    removeItem(key: string) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('TokenService test', () => {
  let tokenService: TokenService;

  beforeAll(() => {
    tokenService = new TokenService();
  });

  test('get/set token from/to LocalStorage', () => {
    const sourceData = {
      token: 'test-token',
      expirationTime: 123456789,
      refreshToken: 'test-refresh-token',
    };
    tokenService.set(sourceData);
    const token = tokenService.get();
    expect(token).toStrictEqual(sourceData);
  });

  test('remove token from LocalStorage', () => {
    tokenService.removeToken();
    const token = tokenService.get();
    expect(token).toStrictEqual({
      token: '',
      expirationTime: 0,
      refreshToken: '',
    });
  });
});
