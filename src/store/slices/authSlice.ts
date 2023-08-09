import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';

const hydrateAction = createAction<SliceTypes>(HYDRATE);

interface AuthState {
  authState: boolean;
}

const initialState: AuthState = {
  authState: false,
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
        authState: action.payload,
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

export const { setAuthState } = authSlice.actions;
export const selectAuthState = (state: RootState): AuthState => state.auth;
export default authSlice.reducer;
