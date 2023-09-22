import { ReactElement } from 'react';
import { IIconProps } from './types';

const EyePassVisible = (props: IIconProps): ReactElement => (
  <svg
    {...props}
    width="22"
    height="14"
    viewBox="0 0 22 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 7.5C21 7.5 17.5 3.5 11 3.5C4.5 3.5 1 7.5 1 7.5M19 5.855L21 3.5M1 3.5L2.996 5.852M14.086 3.82L15 1M7.937 3.812L7 1"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 7.5C21 7.5 17.5 13 11 13C4.5 13 1 7.5 1 7.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 10C12.1046 10 13 9.10457 13 8C13 6.89543 12.1046 6 11 6C9.89543 6 9 6.89543 9 8C9 9.10457 9.89543 10 11 10Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EyePassVisible;
