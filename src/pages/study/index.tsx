import { ReactElement } from 'react';
import Link from 'next/link';

function Services(): ReactElement {
  return (
    <>
      <h1 className="text-white">Services Page</h1>;
      <Link href="/" className="text-white border-2">
        To Home
      </Link>
    </>
  );
}

export default Services;
