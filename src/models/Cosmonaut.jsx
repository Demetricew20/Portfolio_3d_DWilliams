import React, { useEffect, useRef } from "react";
import cosmoScene from "../assets/3d/cosmonaut.glb";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

const Cosmonaut = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(cosmoScene);
  const { actions } = useAnimations(animations, ref);

  useFrame((_, delta) => {
    actions["Take 001"].play();
  });

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Cosmonaut;
