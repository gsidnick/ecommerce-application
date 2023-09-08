import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import BurgerMenu from '@/components/header/BurgerMenu';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('BurgerMenu', () => {
  test('render a BurgerMenu component', () => {
    const initialState = {
      auth: {
        authState: false,
      },
      menu: {
        isBurgerMenuOpen: true,
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    const view = render(
      <Provider store={store}>
        <BurgerMenu />
      </Provider>
    );
    expect(view).toBeTruthy();
  });

  test('should show log in & sign up links', () => {
    const initialState = {
      auth: {
        authState: false,
      },
      menu: {
        isBurgerMenuOpen: true,
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BurgerMenu />
      </Provider>
    );
    const loginLink = screen.getByText(/Log In/i);
    expect(loginLink).toBeInTheDocument();
    const signupLink = screen.getByText(/Sign Up/i);
    expect(signupLink).toBeInTheDocument();
  });

  test('should show profile & log out link', () => {
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
        <BurgerMenu />
      </Provider>
    );
    const profileLink = screen.getByText(/Profile/i);
    expect(profileLink).toBeInTheDocument();
    const logoutLink = screen.getByText(/Log Out/i);
    expect(logoutLink).toBeInTheDocument();
  });
});
