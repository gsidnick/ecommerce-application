import { store } from '@/store/store';
import {
  resetAuthState,
  setAuthState,
  setExpirationTime,
  setRefreshToken,
  setToken,
} from '@/store/slices/authSlice';

describe('Tests for authSlice', () => {
  beforeEach(() => {
    store.dispatch(resetAuthState());
  });

  test('initialize authSlice with initialValue', () => {
    const { auth } = store.getState();
    expect(auth).toStrictEqual({
      authState: false,
      token: '',
      refreshToken: '',
      expirationTime: 0,
    });
  });

  test('change auth state with action', () => {
    store.dispatch(setAuthState(true));
    const { auth } = store.getState();
    expect(auth).toStrictEqual({
      authState: true,
      token: '',
      refreshToken: '',
      expirationTime: 0,
    });
  });

  test('change token state with action', () => {
    store.dispatch(setToken('token-is-installed'));
    const { auth } = store.getState();
    expect(auth).toStrictEqual({
      authState: false,
      token: 'token-is-installed',
      refreshToken: '',
      expirationTime: 0,
    });
  });

  test('change refresh token state with action', () => {
    store.dispatch(setRefreshToken('refresh-token-is-installed'));
    const { auth } = store.getState();
    expect(auth).toStrictEqual({
      authState: false,
      token: '',
      refreshToken: 'refresh-token-is-installed',
      expirationTime: 0,
    });
  });

  test('change expiration time state with action', () => {
    store.dispatch(setExpirationTime(123456789));
    const { auth } = store.getState();
    expect(auth).toStrictEqual({
      authState: false,
      token: '',
      refreshToken: '',
      expirationTime: 123456789,
    });
  });
});
