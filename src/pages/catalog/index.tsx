import { ReactElement } from 'react';
import Link from 'next/link';

function Catalog(): ReactElement {
  return (
    <>
      <h1 className="text-white">Catalog Page</h1>;
      <Link href="/" className="border-2 text-white">
        To Home
      </Link>
    </>
  );
}

export default Catalog;
