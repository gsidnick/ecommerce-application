import { ReactElement } from 'react';
import Link from 'next/link';

function Delivery(): ReactElement {
  return (
    <>
      <h1 className="text-white">Services Page</h1>;
      <Link href="/" className="border-2 text-white">
        To Home
      </Link>
    </>
  );
}

export default Delivery;
