import { ReactElement } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';

function Catalog(): ReactElement {
  return (
    <Layout>
      <h1 className="text-white">Catalog Page</h1>;
      <Link href="/" className="border-2 text-white">
        To Home
      </Link>
    </Layout>
  );
}

export default Catalog;
