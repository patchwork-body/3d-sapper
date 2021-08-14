import { Canvas } from '@react-three/fiber';
import { TileCube } from 'components/tile-cube';

export const CubeMatrix = () => {
  return (
    <Canvas>
      <TileCube />
    </Canvas>
  );
};
