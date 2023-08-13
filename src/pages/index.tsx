import { ReactElement } from 'react';

import Header from '@/components/header/Header';
import MainSlider from '@/components/slider/MainSlider';

function Home(): ReactElement {
  return (
    <div>
      <Header />
      <MainSlider />
    </div>
  );
}

export default Home;
