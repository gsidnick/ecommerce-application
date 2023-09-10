import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import MenuItem from '@/components/header/menu/menu-item/MenuItem';

describe('MenuItem', () => {
  test('render a MenuItem component', () => {
    const initialState = {
      auth: {
        authState: true,
      },
      menu: {
        isBurgerMenuOpen: true,
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const view = render(
      <Provider store={store}>
        <MenuItem item={{ name: 'Home', link: '/home' }} />
      </Provider>
    );
    expect(view).toBeTruthy();
  });
  test('render a MenuItem component', () => {
    const initialState = {
      auth: {
        authState: true,
      },
      menu: {
        isBurgerMenuOpen: true,
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <MenuItem item={{ name: 'Home', link: '/home' }} />
      </Provider>
    );
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
  });
});
