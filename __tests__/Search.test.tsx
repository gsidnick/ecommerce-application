import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Search from '@/components/header/search/Search';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('Search', () => {
  test('render a Search component', () => {
    const initialState = {
      auth: {
        authState: false,
      },
      menu: {
        isBurgerMenuOpen: false,
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const view = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(view).toBeTruthy();
  });

  test('render a Search field', () => {
    const initialState = {
      auth: {
        authState: false,
      },
      menu: {
        isBurgerMenuOpen: false,
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const searchInput = screen.getByRole('textbox');
    expect(searchInput).toBeInTheDocument();
  });

  test('enter text in a Search field', async () => {
    const initialState = {
      auth: {
        authState: false,
      },
      menu: {
        isBurgerMenuOpen: false,
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const searchInput = screen.getByRole('textbox');
    await user.type(searchInput, 'Searched text');
    expect(searchInput).toHaveValue('Searched text');
  });
});
