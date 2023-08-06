import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface AuthState {
  authState: boolean;
}

const initialState: AuthState = {
  authState: false,
};

export enum ESlices {
  auth = 'auth',
}

type SliceTypes = Record<ESlices, string[]>;

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
      action: PayloadAction<SliceTypes>
    ): AuthState => {
      return { ...state, ...action.payload.auth };
    },
  },
});

export default authSlice.reducer;
