import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/3d/scene.glb'); // Adjust the path if necessary

  // Add the useEffect hook to dispose of the scene when the component unmounts
  useEffect(() => {
    return () => {
      if (scene) {
        scene.dispose();  // Properly dispose of the scene to free up resources
      }
    };
  }, [scene]);

  return (
    <primitive
      object={scene}
      position={[0, -6, 0]}
      scale={[5.5, 5.5, 5.5]}
      rotation={[0, Math.PI / 7, 0]}  // Adjust the rotation if necessary
    />
  );
}

export default Model;
