import React, { useEffect, useRef } from "react";
import galaxyScene from "../assets/3d/galaxy.glb";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

const Galaxy = ({ isRotating, ...props }) => {
  const galaxyRef = useRef();
  const { scene, animations } = useGLTF(galaxyScene);
  const { actions } = useAnimations(animations, galaxyRef);

  useFrame((_, delta) => {
    if (isRotating) {
      //controls speed of rotation
    }

    galaxyRef.current.scale.x += 0.00025;
    galaxyRef.current.scale.y += 0.00035;
  });

  return (
    <mesh ref={galaxyRef} layers={10} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Galaxy;
