import React, { useEffect, useRef } from "react";
import alienScene from "../assets/3d/alien_planet.glb";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

const AlienPlanet = ({ isRotating, ...props }) => {
  const planetRef = useRef();
  const { scene, animations } = useGLTF(alienScene);
  const { actions } = useAnimations(animations, planetRef);

  useFrame((_, delta) => {
    actions["Scene animation"].play();
  });

  return (
    <mesh ref={planetRef} {...props}>
      <primitive object={scene} />
    </mesh>
  );
};

export default AlienPlanet;
