import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import AlienModelView from './AlienModelView';
import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { modelScheme } from '../../constants';
import PreLoader from '../PreLoader';

const AlienModelRender = () => {
  const alienModelRef = useRef(null);
  const [currentModelScheme, setCurrentModelScheme] = useState(0);
  const [isAnimation, setIsAnimation] = useState(false);

  const handleClick = () => {
    if (!isAnimation) {
      setIsAnimation(true);

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
      <div
        className='w-full h-screen bg-black flex justify-center items-center'
        onClick={handleClick}
      >
        <AlienModelView
          item={modelScheme[currentModelScheme]}
          modelRef={alienModelRef}
        />

        <Canvas shadows eventSource={document.getElementById('root')}>
          <View.Port />
        </Canvas>
      </div>
    </>
  );
};

export default AlienModelRender;
