import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import Earth from "../models/Earth.jsx";
import Cosmonaut from "../models/Cosmonaut.jsx";
import Galaxy from "../models/Galaxy.jsx";
import PlanetGroup from "./PlanetGroup.jsx";

const CanvasGroup = ({
  isRotating,
  setIsRotating,
  setCurrentStage,
  currentFocusPoint,
  ...props
}) => {
  const groupRef = useRef();

  const { gl, viewport } = useThree();

  const lastX = useRef(0);

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
