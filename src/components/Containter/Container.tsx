import { ReactElement } from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/Footer';

const Container = ({ children }: { children: ReactElement }): ReactElement => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Container;
