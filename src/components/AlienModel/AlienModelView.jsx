import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import Loader from '../Loader.jsx';
import Alien from '../ModelJSX/Alien.jsx';
import React, { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const AlienModelView = ({ item, modelRef, mode, shouldAnimate }) => {
  const lightRef = useRef();

  useGSAP(() => {
    gsap.to(lightRef.current, {
      intensity: mode.name !== 'alienCube' ? 5 : 0,
      duration: 1,
      delay: 0.2,
    })
  },[mode.name])

  return (
    <View className='w-full h-full absolute'>
      <PerspectiveCamera makeDefault position={[0, -0.2, 4.1]} />
      {/* Добавляем DirectionalLight */}
      <directionalLight
        position={[2, 10, 5]}
        intensity={25} // Интенсивность света
        color='white'
        castShadow
      />
      <directionalLight
        position={[-2, 10, -5]}
        intensity={25} // Интенсивность света
        color='white'
        castShadow
      />
      <directionalLight
        position={[0, -2, 15]}
        intensity={0} // Интенсивность света
        color='white'
        castShadow
        ref={lightRef}
      />
      <group ref={modelRef} position={[0, 0, 0]}>
        <Suspense fallback={<Loader />}>
          <Alien
            scale={[2, 2, 2]}
            item={item}
            mode={mode}
            shouldAnimate={shouldAnimate}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default AlienModelView;
