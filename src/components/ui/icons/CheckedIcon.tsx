import { ReactElement } from 'react';
import { IIconProps } from './types';

const CheckedIcon = (props: IIconProps): ReactElement => (
  <svg
    {...props}
    width="10"
    height="8"
    viewBox="0 0 10 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.115385 4.4C0.0384615 4.32 0 4.2 0 4.12C0 4.04 0.0384615 3.92 0.115385 3.84L0.653846 3.28C0.807692 3.12 1.03846 3.12 1.19231 3.28L1.23077 3.32L3.34615 5.68C3.42308 5.76 3.53846 5.76 3.61538 5.68L8.76923 0.12H8.80769C8.96154 -0.04 9.19231 -0.04 9.34615 0.12L9.88462 0.68C10.0385 0.84 10.0385 1.08 9.88462 1.24L3.73077 7.88C3.65385 7.96 3.57692 8 3.46154 8C3.34615 8 3.26923 7.96 3.19231 7.88L0.192308 4.52L0.115385 4.4Z"
      fill="#139D29"
    />
  </svg>
);

export default CheckedIcon;


