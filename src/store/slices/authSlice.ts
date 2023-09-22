import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';

const hydrateAction = createAction<SliceTypes>(HYDRATE);

export interface AuthState {
  authState: boolean;
  token: string;
  refreshToken: string;
  expirationTime: number;
}

const initialState: AuthState = {
  authState: false,
  token: '',
  refreshToken: '',
  expirationTime: 0,
};

enum ESlices {
  auth = 'auth',
}

type SliceTypes = Record<ESlices, string[]>;

export const authSlice = createSlice({
  name: ESlices.auth,
  initialState,
  reducers: {
    setAuthState(state: AuthState, action: PayloadAction<boolean>) {
      return {
        ...state,
        authState: action.payload,
      };
    },
    setToken(state: AuthState, action: PayloadAction<string>) {
      return {
        ...state,
        token: action.payload,
      };
    },
    setRefreshToken(state: AuthState, action: PayloadAction<string>) {
      return {
        ...state,
        refreshToken: action.payload,
      };
    },
    setExpirationTime(state: AuthState, action: PayloadAction<number>) {
      return {
        ...state,
        expirationTime: action.payload,
      };
    },
    resetAuthState(state: AuthState) {
      return {
        ...state,
        authState: false,
        token: '',
        refreshToken: '',
        expirationTime: 0,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      hydrateAction,
      (state: AuthState, action: PayloadAction<SliceTypes>): AuthState => ({
        ...state,
        ...action.payload.auth,
      })
    );
  },
});

export const {
  setAuthState,
  setToken,
  setRefreshToken,
  setExpirationTime,
  resetAuthState,
} = authSlice.actions;
export const selectAuthState = (state: RootState): AuthState => state.auth;
export default authSlice.reducer;
