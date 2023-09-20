import { ReactElement } from 'react';
import RSSchoolIcon from '@/components/ui/icons/RSSchoolIcon';
import GithubIcon from '@/components/ui/icons/GithubIcon';

const Footer = (): ReactElement => (
  <footer className="grid grid-cols-3 items-center gap-2 bg-gray-dark px-8 py-4 text-gray-400">
    <div className="justify-self-left flex flex-row gap-2">
      <a
        className="svg-icon block h-8 w-20 transition-colors duration-300 hover:text-white"
        href="https://rs.school/js/"
      >
        <RSSchoolIcon />
      </a>
    </div>
    <div className="justify-self-center text-xs">
      © 2023, All Rights Reserved
    </div>
    <div className="flex flex-row gap-2 justify-self-end">
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
