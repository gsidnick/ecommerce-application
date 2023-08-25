import { NextPage } from 'next';
import { ReactElement } from 'react';
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastNotification: NextPage<ToastContainerProps> = ({
  closeOnClick,
  pauseOnFocusLoss,
  pauseOnHover,
  className,
  rtl,
  closeButton,
  theme,
  style,
  position,
  hideProgressBar,
}: ToastContainerProps): ReactElement => (
  <ToastContainer
    className={className}
    rtl={rtl}
    theme={theme}
    closeButton={closeButton}
    pauseOnHover={pauseOnHover}
    style={style}
    position={position}
    autoClose={2000}
    hideProgressBar={hideProgressBar}
    closeOnClick={closeOnClick}
    pauseOnFocusLoss={pauseOnFocusLoss}
  />
);

export default ToastNotification;

ToastNotification.defaultProps = {
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  className: '',
  rtl: false,
  closeButton: true,
  theme: 'light',
  style: {},
  position: 'top-right',
  hideProgressBar: false,
};
