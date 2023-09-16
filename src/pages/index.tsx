import { ReactElement } from 'react';

import MainSlider from '@/components/slider/MainSlider';

function Home(): ReactElement {
  return (
    <>
      <MainSlider />
      <div className="mt-2 ml-3">
        Promocodes to apply:
        <ul>
          <li>30ALL - 30% off on everything</li>
          <li>5BASS - 5% off on Bass guitars</li>
          <li>10ACOUSTIC - 10% off on Acoustic guitars</li>
        </ul>
      </div>
    </>
  );
}

export default Home;
