import { PerspectiveCamera, View } from '@react-three/drei';
import Alien from '../Model/Alien.jsx';
import { Suspense } from 'react';
import Loader from '../Loader.jsx';
import AlienDefault from '../Model/AlienModel.jsx';

const AlienModelView = ({ item, modelRef }) => {
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
          <AlienDefault scale={[2, 2, 2]} item={item} />
        </Suspense>
      </group>
    </View>
  );
};

export default AlienModelView;
