import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';

const hydrateAction = createAction<SliceTypes>(HYDRATE);

export interface MenuState {
  isBurgerMenuOpen: boolean;
}

const initialState: MenuState = {
  isBurgerMenuOpen: false,
};

enum ESlices {
  menu = 'menu',
}

type SliceTypes = Record<ESlices, string[]>;

export const menuSlice = createSlice({
  name: ESlices.menu,
  initialState,
  reducers: {
    setStateBurgerMenu(state: MenuState, action: PayloadAction<boolean>) {
      console.log('action.payload', action.payload);

      return {
        ...state,
        isBurgerMenuOpen: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      hydrateAction,
      (state: MenuState, action: PayloadAction<SliceTypes>): MenuState => ({
        ...state,
        ...action.payload.menu,
      })
    );
  },
});

export const { setStateBurgerMenu } = menuSlice.actions;
export const selectMenuState = (state: RootState): MenuState => state.menu;
export default menuSlice.reducer;
