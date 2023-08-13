import React, { ReactElement } from 'react';
import Image from 'next/image';
import type { GetServerSideProps } from 'next';
import { wrapper } from '@/store/store';
import { selectAuthState, setAuthState } from '@/store/slices/authSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';

import cart from '@/assets/images/cart-icon.png';

interface AuthState {
  authState: boolean;
}

function Search(): ReactElement {
  const { authState } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <Image src={cart} alt="cart" className="mr-8" />
        <button
          type="button"
          className="rounded border-2 border-solid px-3 py-1 text-white60 transition-colors duration-300 hover:text-white"
          onClick={(): void => {
            if (authState) {
              dispatch(setAuthState(false));
            } else {
              dispatch(setAuthState(true));
            }
          }}
        >
          {authState ? 'Sign Out' : 'Sign In'}
        </button>
      </div>
      <div
        style={authState ? { color: 'green' } : { color: 'red' }}
        className="flex justify-center"
      >
        {authState ? 'Logged In' : 'Not Logged In'}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<AuthState> =
  wrapper.getServerSideProps(
    (store) => async (): Promise<{ props: AuthState }> => {
      await Promise.resolve();
      store.dispatch(setAuthState(false));
      return {
        props: {
          authState: false,
        },
      };
    }
  );

export default Search;
