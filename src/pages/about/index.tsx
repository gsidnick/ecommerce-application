import { ReactElement } from 'react';
import Link from 'next/link';

function About(): ReactElement {
  return (
    <>
      <h1 className="text-white">About Page</h1>;
      <Link href="/" className="border-2 text-white">
        To Home
      </Link>
    </>
  );
}

export default About;
