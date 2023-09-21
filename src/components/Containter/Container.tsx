import { ReactElement } from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';

const Container = ({ children }: { children: ReactElement }): ReactElement => (
  <div className="flex min-h-screen flex-col">
    <div className="flex-grow">
      <Header />
      {children}
    </div>
    <Footer />
  </div>
);

export default Container;
