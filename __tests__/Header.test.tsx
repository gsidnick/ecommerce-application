import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Header from '@/components/header/Header';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('next/router', () => jest.requireActual('next-router-mock'));

describe('Header', () => {
  test('render a Header component', () => {
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
        <Header />
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
        isBurgerMenuOpen: false,
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Header />
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
        isBurgerMenuOpen: false,
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );
    const profileLink = screen.getByText(/Profile/i);
    expect(profileLink).toBeInTheDocument();
    const logoutLink = screen.getByText(/Log Out/i);
    expect(logoutLink).toBeInTheDocument();
  });
});
