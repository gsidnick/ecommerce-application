import Link from 'next/link';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ERoute } from '@/data/routes';
import notFoundimage from '@/assets/images/404-not-found.png';
import {
  MILLISECONDS_STEP_TO_REDIRECT,
  SECONDS_STEP_TO_REDIRECT,
  SECONDS_TO_REDIRECT,
  SECONDS_EDGE_TO_REDIRECT,
} from '@/constants';

const NotFound: NextPage = () => {
  const [seconds, setSeconds] = useState<number>(SECONDS_TO_REDIRECT);

  const router = useRouter();

  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((prev) => prev - SECONDS_STEP_TO_REDIRECT);
      if (seconds === SECONDS_EDGE_TO_REDIRECT)
        router.push(ERoute.home).catch(() => {
          toast.error('Error while redirecting to home page');
        });
    }, MILLISECONDS_STEP_TO_REDIRECT);
    return () => {
      clearInterval(timerId);
    };
  }, [seconds]);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center">
      <Link
        href="/"
        className="absolute top-10 text-3xl text-slate-50 underline underline-offset-2"
      >
        <h1>To Home Page</h1>
      </Link>
      <div className="flex items-center justify-center">
        <Image src={notFoundimage} alt="404 error" />
      </div>
    </div>
  );
};

export default NotFound;
