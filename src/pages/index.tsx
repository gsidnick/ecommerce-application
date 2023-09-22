import { ReactElement } from 'react';
import MainSlider from '@/components/slider/MainSlider';
import Promocodes from '@/components/Promocodes';

function Home(): ReactElement {
  return (
    <>
      <MainSlider />
      <Promocodes />
    </>
  );
}

export default Home;
