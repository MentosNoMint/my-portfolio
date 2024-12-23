import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';
import { hideElement } from '../../utils/animations';
const AboutMeText = ({ changePage }) => {
  const textRef = useRef(null);
  const accentWordRef = useRef(null);
  useEffect(() => {
    if (changePage) {
      hideElement(gsap, textRef, '-');
    } else {
      hideElement(gsap, textRef, '-', true);
    }
  }, [changePage]);

  useGSAP(() => {
    gsap.to(textRef.current.children, {
      y: 0,
      duration: 0.7,
      delay: 0.35,
      marginTop: '16px',
    });
    gsap.to(accentWordRef.current, {
      width: 'auto',
      duration: 0.7,
      delay: 0.7,
    });
  }, []);
  return (
    <div className='max-w-[22rem] mt-0 animation-limit' ref={textRef}>
      <h1 className='text-white font-custom text-base leading-5 flex items-end relative header-animation'>
        Привет! Я Кирилл, фронтенд-разработчик, который верит, что сайт должен
        не только работать, но и
        <div
          className='absolute w-0 h-5 bg-white ml-[7.5rem] text-black'
          ref={accentWordRef}
        >
          впечатлять.
        </div>
      </h1>
    </div>
  );
};

export default AboutMeText;
