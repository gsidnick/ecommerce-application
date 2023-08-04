import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from './store';
import { HYDRATE } from 'next-redux-wrapper';

export interface AuthState {
  authState: boolean;
}

const initialState: AuthState = {
  authState: false,
};

enum ESlices {
  auth = 'auth',
}

export const authSlice = createSlice({
  name: ESlices.auth,
  initialState,
  reducers: {
    setAuthState(state: AuthState, action: PayloadAction<boolean>) {
      state.authState = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (
      state: AuthState,
      action: PayloadAction<keyof typeof ESlices>
    ) => {
      console.log('HYDRATE', action.payload);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState): boolean =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  state.auth?.authState as boolean;

export default authSlice.reducer;
