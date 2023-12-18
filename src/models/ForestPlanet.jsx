import React, { useEffect, useRef } from "react";
import forestScene from "../assets/3d/forest_planet.glb";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

const ForestPlanet = ({ isRotating, ...props }) => {
  const planetRef = useRef();
  const planet = useGLTF(forestScene);

  planetRef.current.rotation.y = 4.5;

  useFrame((_, delta) => {
    //use frame second param takes in delta
    if (isRotating) {
      //controls speed of rotation
      planetRef.current.rotation.y += 0.1 * delta;
    }
  });

  return (
    <mesh {...props} ref={planetRef}>
      <primitive object={planet.scene} />
    </mesh>
  );
};

export default ForestPlanet;
