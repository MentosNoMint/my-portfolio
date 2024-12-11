import { OrbitControls, PerspectiveCamera, View } from '@react-three/drei';
import { Suspense } from 'react';
import Loader from '../Loader.jsx';
import Cup from '../Model/Cub.jsx';
import Alien from '../ModelJSX/Alien.jsx';
import Model from '../ModelJSX/Cup';

const AlienModelView = ({ item, modelRef, mode, shouldAnimate }) => {
  return (
    <View className='w-full h-full absolute'>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
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
      <group position={[0, 0, 0]} ref={modelRef}>
        <Suspense fallback={<Loader />}>
          {/* <AlienDefault scale={[2, 2, 2]} item={item} mode={mode} shouldAnimate={shouldAnimate} /> */}
          {/* <Alien scale={[2, 2, 2]} item={item} mode={mode} shouldAnimate={shouldAnimate} /> */}
          {/* <Cup
            scale={[2, 2, 2]}
            // rotation={[0.3, 0.2, 0]}
            // position={[0, -0.4, 0]}
          /> */}
          {/* <Model scale={[2, 2, 2]} item={item} mode={mode} shouldAnimate={shouldAnimate}/> */}
        </Suspense>
      </group>
    </View>
  );
};

export default AlienModelView;
