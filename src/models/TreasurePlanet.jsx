import React, { useEffect, useRef } from "react";
import forestScene from "../assets/3d/treasure_island.glb";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

const TreasurePlanet = ({ isRotating, rotateRight, rotateLeft, ...props }) => {
  const planetRef = useRef();
  const { scene, animations } = useGLTF(forestScene);
  const { actions } = useAnimations(animations, planetRef);

  useFrame((_, delta) => {
    actions["Scene"].play();

    if (isRotating) {
      if (rotateRight) {
        planetRef.current.position.x -= 0.05;
        planetRef.current.position.z -= 0.035;
      } else {
        planetRef.current.position.x += 0.05;
        planetRef.current.position.z += 0.035;
      }
      // planetRef.current.position.x -= 0.005;
      // planetRef.current.position.z -= 0.0004;
    }
  });

  useEffect(() => {});

  scene.renderOrder = 1;

  return (
    <mesh {...props} ref={planetRef}>
      <primitive object={scene} />
      <meshPhongMaterial opacity={1} />
    </mesh>
  );
};

export default TreasurePlanet;
