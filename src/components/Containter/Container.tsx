import { ReactElement } from 'react';
import Header from '@/components/header/Header';

const Container = ({ children }: { children: ReactElement }): ReactElement => (
  <div>
    <Header />
    {children}
  </div>
);

export default Container;
