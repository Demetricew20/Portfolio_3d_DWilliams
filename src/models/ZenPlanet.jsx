import React, { useEffect, useRef } from "react";
import zenScene from "../assets/3d/zen_planet.glb";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

const ZenPlanet = ({ isRotating, ...props }) => {
  const planetRef = useRef();
  const planet = useGLTF(zenScene);

  useFrame((_, delta) => {
    //use frame second param takes in delta
    if (isRotating) {
      //controls speed of rotation
      planetRef.current.rotation.y += 0.1 * delta;
    }
  });

  return (
    <mesh ref={planetRef} {...props}>
      <primitive  object={planet.scene} />
    </mesh>
  );
};

export default ZenPlanet;
