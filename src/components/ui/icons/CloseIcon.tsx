import { ReactElement } from 'react';
import { IIconProps } from './types';

const CloseIcon = (props: IIconProps): ReactElement => (
  <svg
    {...props}
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="red"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      id="styled-burger-one"
      d="M1 1.18213L12.9199 13.1021"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      id="styled-burger-two"
      d="M12.9199 1.18213L1 13.1021"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default CloseIcon;
