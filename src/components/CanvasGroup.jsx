import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import AlienPlanet from "../models/AlienPlanet";
import { a } from "@react-spring/three";
import ZenPlanet from "../models/ZenPlanet";
import TreasurePlanet from "../models/Planet";
import MonsterPlanet from "../models/MonsterPlanet";
import Earth from "../models/Earth";
import Cosmonaut from "../models/Cosmonaut";
import Galaxy from "../models/Galaxy";
import PlanetGroup from "./PlanetGroup";

const CanvasGroup = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) => {
  const groupRef = useRef();

  return (
    <a.group ref={groupRef}>
      <PlanetGroup
        setIsRotating={setIsRotating}
        currentFocusPoint={currentFocusPoint}
        isRotating={isRotating}
        setCurrentStage={setCurrentStage}
      />

      <Earth isRotating={isRotating} position={[0, -2.5, -4]} scale={0.75} />

      <Cosmonaut scale={0.0055} position={[-2.5, -1.5, 8]} rotation-y={-0.05} />

      <Galaxy
        isRotating={isRotating}
        position={[-45, -50, 0]}
        scale={[30, 25, 10]}
      />
    </a.group>
  );
};

export default CanvasGroup;
