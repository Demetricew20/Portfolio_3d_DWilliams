import React, { useEffect, useRef } from "react";
import galaxyScene from "../assets/3d/galaxy.glb";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

const Galaxy = ({ isRotating, ...props }) => {
  const galaxyRef = useRef();
  const galaxy = useGLTF(galaxyScene);

  useFrame((_, delta) => {
    //use frame second param takes in delta
    if (isRotating) {
      //controls speed of rotation
      galaxyRef.current.rotation.y += 0.1 * delta;
    }
  });

  return (
    <mesh>
      <primitive {...props} object={galaxy.scene} ref={galaxyRef} />
    </mesh>
  );
};

export default Galaxy;
