import React, { useEffect, useRef } from "react";
import cosmoScene from "../assets/3d/cosmonaut.glb";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

const Cosmonaut = ({ isRotating, ...props }) => {
  const ref = useRef();
  const cosmonaut = useGLTF(cosmoScene);

  ref.current.rotation.y = -.25;
  
  useFrame((_, delta) => {
    //use frame second param takes in delta
    if (isRotating) {
      //controls speed of rotation
      ref.current.rotation.y += 0.1 * delta;
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <primitive object={cosmonaut.scene} />
    </mesh>
  );
};

export default Cosmonaut;
