import { ReactElement } from 'react';
import MainSlider from '@/components/slider/MainSlider';
import Layout from '@/components/Layout';

function Home(): ReactElement {
  return (
    <Layout>
      <MainSlider />
    </Layout>
  );
}

export default Home;
