import { ReactElement } from 'react';
import Link from 'next/link';

function Opt(): ReactElement {
  return (
    <>
      <h1 className="text-white">Opt Page</h1>;
      <Link href="/" className="border-2 text-white">
        To Home
      </Link>
    </>
  );
}

export default Opt;
