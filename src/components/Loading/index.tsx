import { ReactElement } from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Loading = (): ReactElement => {
  console.log('Loading...');
  return (
    <div className="text-white w-full h-full">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#42a4ff"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#ffffffcc',
          paddingTop: '100px',
        }}
        visible
      />
    </div>
  );
};

export default Loading;
