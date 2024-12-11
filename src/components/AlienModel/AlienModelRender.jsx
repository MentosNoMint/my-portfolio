import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import AlienModelView from './AlienModelView';
import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { modelScheme } from '../../constants';
import PreLoader from '../PreLoader';
import {
  alienCubePosition,
  cubCubePosition,
  defaultPosition,
} from '../../constants';

const AlienModelRender = () => {
  const alienModelRef = useRef(null);
  const [currentModelScheme, setCurrentModelScheme] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [selectMode, setSelectmode] = useState(cubCubePosition);

  const handleStateClick = (mode) => {
    setSelectmode(mode);
    setShouldAnimate(true);
  };

  const handleClick = () => {
    if (!isAnimation) {
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
    <>
      <PreLoader />
      <button
        className='fixed text-white z-50'
        onClick={() => handleStateClick(cubCubePosition)}
      >
        Достижения
      </button>
      <button
        className='fixed text-white z-50 ml-[100px]'
        onClick={() => handleStateClick(alienCubePosition)}
      >
        Назад
      </button>
      <div
        className='w-full h-screen bg-black flex justify-center items-center'
        onClick={handleClick}
      >
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
    </>
  );
};

export default AlienModelRender;
