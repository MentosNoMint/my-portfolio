import React from 'react';
import { Html } from '@react-three/drei';
const Loader = () => {
  return (
    <Html>
      <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
        <div className='w-[10vw] h-[10vw] rounded-full text-2xl'>
          Loading...
        </div>
      </div>
    </Html>
  );
};

export default Loader;