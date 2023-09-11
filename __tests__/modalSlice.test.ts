import { store } from '@/store/store';
import { setModalState } from '@/store/slices/modalSlice';

describe('Tests for modalSlice', () => {
  beforeEach(() => {
    store.dispatch(setModalState(false));
  });

  test('initialize modalSlice with initialValue', () => {
    const { modal } = store.getState();
    expect(modal).toStrictEqual({
      modalState: false,
    });
  });

  test('change isBurgerMenuOpen state with action', () => {
    store.dispatch(setModalState(true));
    const { modal } = store.getState();
    expect(modal).toStrictEqual({
      modalState: true,
    });
  });
});
