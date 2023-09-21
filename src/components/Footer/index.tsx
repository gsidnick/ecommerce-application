import { ReactElement } from 'react';
import RSSchoolIcon from '@/components/ui/icons/RSSchoolIcon';
import GithubIcon from '@/components/ui/icons/GithubIcon';

const Footer = (): ReactElement => (
  <footer className="relative z-50 grid grid-cols-1 items-center gap-2 bg-gray-dark px-8 py-4 text-gray-400 sm:grid-cols-3">
    <div className="order-1 flex flex-row gap-2 justify-self-center sm:order-1 sm:justify-self-start">
      <a
        className="svg-icon block h-8 w-20 transition-colors duration-300 hover:text-white"
        href="https://rs.school/js/"
      >
        <RSSchoolIcon />
      </a>
    </div>
    <div className="order-3 justify-self-center text-center text-xs sm:order-2">
      © 2023, All Rights Reserved
    </div>
    <div className="order-2 flex flex-row gap-2 justify-self-center sm:order-3 sm:justify-self-end">
      <a
        className="svg-icon block h-8 w-8 transition-colors duration-300 hover:text-white"
        href="https://github.com/gsidnick/"
      >
        <GithubIcon />
      </a>
      <a
        className="svg-icon block h-8 w-8 transition-colors duration-300 hover:text-white"
        href="https://github.com/deep-logic2000/"
      >
        <GithubIcon />
      </a>
      <a
        className="svg-icon block h-8 w-8 transition-colors duration-300 hover:text-white"
        href="https://github.com/ToLive/"
      >
        <GithubIcon />
      </a>
    </div>
  </footer>
);

export default Footer;
