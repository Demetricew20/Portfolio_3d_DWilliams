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

  const adjustCosmonaut = () => {
    let screenScale = null;
    // let screenPosition = [0, -6.5, -43];
    let screenPosition = [-2.5, -1.5, 8];
    let rotation = [0, 0, 0];

    if (window.innerWidth < 768 && window.innerWidth > 480) {
      screenScale = 0.0055;
    } else if (window.innerWidth <= 480) {
      screenPosition = [-1.35, -2, 8];
      screenScale = 0.00375;
    } else {
      screenScale = 0.0055;
    }

    return [screenScale, screenPosition, rotation];
  };

  const [cosmonautScale, cosmonautPosition, cosmonautRotation] =
    adjustCosmonaut();

  return (
    <a.group ref={groupRef}>
      <PlanetGroup
        setIsRotating={setIsRotating}
        currentFocusPoint={currentFocusPoint}
        isRotating={isRotating}
        setCurrentStage={setCurrentStage}
      />

      <Earth isRotating={isRotating} position={[0, -2.5, -4]} scale={0.75} />

      <Cosmonaut
        scale={cosmonautScale}
        position={cosmonautPosition}
        rotation={cosmonautRotation}
      />

      <Galaxy
        isRotating={isRotating}
        position={[-45, -50, 0]}
        scale={[30, 25, 10]}
      />
    </a.group>
  );
};

export default CanvasGroup;
