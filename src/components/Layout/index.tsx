import { ReactElement, ReactNode } from 'react';
import Header from '@/components/header/Header';

function Layout({ children }: { children: ReactNode }): ReactElement {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
