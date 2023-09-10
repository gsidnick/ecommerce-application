import { store } from '@/store/store';
import { setStateBurgerMenu } from '@/store/slices/menuSlice';

describe('Tests for menuSlice', () => {
  beforeEach(() => {
    store.dispatch(setStateBurgerMenu(false));
  });

  test('initialize menuSlice with initialValue', () => {
    const { menu } = store.getState();
    expect(menu).toStrictEqual({
      isBurgerMenuOpen: false,
    });
  });

  test('change isBurgerMenuOpen state with action', () => {
    store.dispatch(setStateBurgerMenu(true));
    const { menu } = store.getState();
    expect(menu).toStrictEqual({
      isBurgerMenuOpen: true,
    });
  });
});
