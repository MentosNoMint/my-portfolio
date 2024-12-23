import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useEffect } from 'react';
import { hideElement } from '../../utils/animations';
const InformationText = ({ changePage }) => {
  const textRefs = useRef([]);

  useEffect(() => {
    if (changePage) {
      hideElement(gsap, textRefs, '');
    } else {
      hideElement(gsap, textRefs, '', true);
    }
  }, [changePage]);

  useGSAP(() => {
    gsap.to(textRefs.current.children, {
      y: 0,
      duration: 0.7,
      delay: 0.4,
      stagger: 0.08,
      ease: 'power2.out',
    });
  });
  return (
    <div className='h-full flex items-end w-full max-w-[83.125rem]'>
      <div
        className='w-full flex justify-between z-10 mb-[50px]'
        ref={textRefs}
      >
        <div className='flex flex-col max-w-[396px] div-animation'>
          <h1 className='text-white font-custom'>Обо мне</h1>
          <p className='text-white font-custom leading-5 mt-px'>
            Привет! Я Кирилл, начинающий фронтенд-разработчик, который верит,
            что сайт должен не только работать, но и впечатлять.
          </p>
        </div>
        <div className='flex flex-col max-w-[396px] div-animation'>
          <h1 className='text-white font-custom'>Мой стек</h1>
          <p className='text-white font-custom leading-5 mt-px'>
            Привет! Я Кирилл, начинающий фронтенд-разработчик, который верит,
            что сайт должен не только работать, но и впечатлять.
          </p>
        </div>
        <div className='flex flex-col max-w-[396px] div-animation'>
          <h1 className='text-white font-custom'>Моя цель</h1>
          <p className='text-white font-custom leading-5 mt-px'>
            Привет! Я Кирилл, начинающий фронтенд-разработчик, который верит,
            что сайт должен не только работать, но и впечатлять.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InformationText;
