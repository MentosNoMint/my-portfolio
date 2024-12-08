import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const PreLoader = () => {
  const preloaderRef = useRef(null);
  useGSAP(() => {
    gsap.to(preloaderRef.current, {
      opacity: 0,
      duration: 0.1,
      delay: 2.6,
      display: 'none',
    });
    gsap.from('#bar', {
      width: 0,
      duration: 2,
    });
    gsap.to(preloaderRef.current, {
      delay: 2.2,
      scale: 1.5,
      duration: 0.4,
      ease: 'power4.in',
    });
  }, []);
  return (
    <div
      className='fixed w-full h-screen bg-black z-50 opacity-1 flex justify-center items-center'
      ref={preloaderRef}
    >
      <div className='w-[350px] h-[60px] bg-[#333333] overflow-hidden flex items-center relative'>
        <div className='w-full h-full bg-white' id='bar'></div>
      </div>
    </div>
  );
};

export default PreLoader;
