import React, { useEffect, useRef } from "react";
import monsterScene from "../assets/3d/monster_planet.glb";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

const MonsterPlanet = ({ isRotating, ...props }) => {
  const planetRef = useRef();
  const { scene, animations } = useGLTF(monsterScene);
  const { actions } = useAnimations(animations, planetRef);

  useFrame((_, delta) => {
    actions["Main Animation 001"].play();
  });

  return (
    <mesh {...props} layers={2} ref={planetRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default MonsterPlanet;
