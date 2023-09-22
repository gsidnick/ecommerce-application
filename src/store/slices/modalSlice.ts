import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';

const hydrateAction = createAction<SliceTypes>(HYDRATE);
export interface ModalState {
  modalState: boolean;
}

const initialState: ModalState = {
  modalState: false,
};

enum ESlices {
  modal = 'modal',
}

type SliceTypes = Record<ESlices, string[]>;

export const modalSlice = createSlice({
  name: ESlices.modal,
  initialState,
  reducers: {
    setModalState(state: ModalState, action: PayloadAction<boolean>) {
      return {
        ...state,
        modalState: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      hydrateAction,
      (state: ModalState, action: PayloadAction<SliceTypes>): ModalState => ({
        ...state,
        ...action.payload.modal,
      })
    );
  },
});

export const { setModalState } = modalSlice.actions;
export const selectModalState = (state: RootState): ModalState => state.modal;
export default modalSlice.reducer;
