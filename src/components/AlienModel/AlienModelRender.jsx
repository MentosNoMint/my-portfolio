import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import AlienModelView from './AlienModelView';
import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { modelScheme } from '../../constants';
import PreLoader from '../PreLoader';
import {
  alienCubePosition,
  cubCubePosition,
  rubikCubePosition,
} from '../../constants';
import { useGSAP } from '@gsap/react';
import InformationText from '../heroSection/InformationText';
import AboutMeText from '../heroSection/AboutMeText';
import {
  moveToTopRight,
  hideElement,
  arrowElement,
  defaultPostion,
} from '../../utils/animations';
import { arrowLeft } from '../../utils';
const AlienModelRender = () => {
  const alienModelRef = useRef(null);
  const backBtnRef = useRef(null);
  const [currentModelScheme, setCurrentModelScheme] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [changePage, setChangePage] = useState(false);
  const [selectMode, setSelectmode] = useState(alienCubePosition);
  const headerRef = useRef([]);

  useGSAP(() => {
    gsap.to(headerRef.current.children, {
      y: 0,
      duration: 0.7,
      delay: 0.2,
      stagger: 0.08,
      marginTop: '16px',
    });
  }, []);

  const handleStateClick = (mode) => {
    setSelectmode(mode);
    setShouldAnimate(true);
    setChangePage(true);
  };

  const handleClick = () => {
    if (!isAnimation && selectMode.name === 'alienCube') {
      setIsAnimation(true);
      setShouldAnimate(false);

      gsap.to(alienModelRef.current.rotation, {
        y: alienModelRef.current.rotation.y + Math.PI * 2,
        duration: 0.7,
        ease: 'power2.inOut',
        onUpdate: function () {
          if (this.progress() >= 0.5 && this.progress() < 0.51) {
            setCurrentModelScheme((prev) => (prev + 1) % modelScheme.length);
          }
        },
        onComplete: () => {
          setIsAnimation(false);
        },
      });
    }
  };

  return (
    <div className='w-full h-screen fixed flex flex-col items-center'>
      {/* <PreLoader /> */}
      <div className='max-w-[83.125rem] w-full z-10 flex flex-col'>
        <div className='w-full bg-white mt-6 h-px opacity-60'></div>
        <div className='flex w-full justify-between items-start'>
          <div className='flex mt-0 animation-limit' ref={headerRef}>
            <button
              className='text-white pb-2.5 py-2 px-4 rounded-full bg-white bg-opacity-10 text-sm font-custom header-animation'
              onClick={() => {
                handleStateClick(alienCubePosition);
                moveToTopRight(gsap, alienModelRef);
                hideElement(gsap, headerRef, '-', false);
                arrowElement(gsap, backBtnRef, false);
              }}
            >
              Мои проекты
            </button>
            <button
              className='text-white pb-2 py-[0.4rem] px-4 rounded-full bg-white bg-opacity-10 text-sm font-custom mx-1.5 header-animation'
              onClick={() => {
                handleStateClick(cubCubePosition);
                moveToTopRight(gsap, alienModelRef);
                hideElement(gsap, headerRef, '-', false);
                arrowElement(gsap, backBtnRef, false);
              }}
            >
              Достижения
            </button>
            <button
              className='text-white pb-2 py-[0.4rem] px-4 rounded-full bg-white bg-opacity-10 text-sm font-custom header-animation'
              onClick={() => {
                handleStateClick(rubikCubePosition);
                moveToTopRight(gsap, alienModelRef);
                hideElement(gsap, headerRef, '-', false);
                arrowElement(gsap, backBtnRef, false);
              }}
            >
              Анимации
            </button>
          </div>
          <div
            className={`fixed w-full mt-4 animation-limit ${changePage ? '' : 'pointer-events-none'}`}
          >
            <div className='div-animation' ref={backBtnRef}>
              <button
                className='w-10 h-10 rounded-full bg-white bg-opacity-20 flex justify-center items-center cursor-pointer'
                onClick={() => {
                  setChangePage(false), defaultPostion(gsap, alienModelRef);
                  setSelectmode(alienCubePosition);
                  arrowElement(gsap, backBtnRef, true);
                  hideElement(gsap, headerRef, '-', true);
                }}
              >
                <img src={arrowLeft} alt='arrow' />
              </button>
            </div>
          </div>
          <AboutMeText changePage={changePage} />
        </div>
      </div>
      <div className='w-full h-screen bg-black fixed' onClick={handleClick}>
        <AlienModelView
          item={modelScheme[currentModelScheme]}
          modelRef={alienModelRef}
          mode={selectMode}
          shouldAnimate={shouldAnimate}
        />

        <Canvas shadows eventSource={document.getElementById('root')}>
          <View.Port />
        </Canvas>
      </div>
      <InformationText changePage={changePage} />
    </div>
  );
};

export default AlienModelRender;
