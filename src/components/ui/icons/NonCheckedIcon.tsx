import { ReactElement } from 'react';
import { IIconProps } from './types';

const CheckedIcon = (props: IIconProps): ReactElement => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    // xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    width="10"
    height="10"
    viewBox="0 0 256 256"
  >
    <g
      stroke="none"
      strokeWidth="0"
      strokeDasharray="none"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      strokeMiterlimit="10"
      fill="none"
      fillRule="nonzero"
      opacity="1"
      transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
    >
      <path
        d="M 5 90 c -1.28 0 -2.559 -0.488 -3.536 -1.465 c -1.953 -1.952 -1.953 -5.118 0 -7.07 l 80 -80 c 1.951 -1.952 5.119 -1.952 7.07 0 c 1.953 1.953 1.953 5.119 0 7.071 l -80 80 C 7.559 89.512 6.28 90 5 90 z"
        stroke="none"
        strokeWidth="1"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        fill="rgb(236,0,0)"
        fillRule="nonzero"
        opacity="1"
        transform="matrix(1 0 0 1 0 0)"
      />
      <path
        d="M 85 90 c -1.279 0 -2.56 -0.488 -3.535 -1.465 l -80 -80 c -1.953 -1.953 -1.953 -5.119 0 -7.071 c 1.953 -1.952 5.118 -1.952 7.071 0 l 80 80 c 1.953 1.952 1.953 5.118 0 7.07 C 87.56 89.512 86.279 90 85 90 z"
        stroke="none"
        strokeWidth="1"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        fill="rgb(236,0,0)"
        fillRule="nonzero"
        opacity="1"
        transform=" matrix(1 0 0 1 0 0) "
      />
    </g>
  </svg>
);

export default CheckedIcon;
