import React, { useEffect, useRef } from "react";
import alienScene from "../assets/3d/alien_planet.glb";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

const AlienPlanet = ({ isRotating, ...props }) => {
  const planetRef = useRef();
  const planet = useGLTF(alienScene);

  useFrame((_, delta) => {
    //use frame second param takes in delta
    if (isRotating) {
      //controls speed of rotation
      planetRef.current.rotation.y += 0.1 * delta;
    }
  });

  return (
    <mesh ref={planetRef} {...props}>
      <primitive object={planet.scene} />
    </mesh>
  );
};

export default AlienPlanet;
