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

  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  //controls speed of rotation and how fast it stops after rotating
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    //figures out if we are using mobile (touches) or desktop device the grabs x position
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      //calculates change in horizontal position
      const delta = (clientX - lastX.current) / viewport.width;

      groupRef.current.position.x += delta * 0.01 * Math.PI;

      lastX.current = clientX;

      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      if (!isRotating) {
        setIsRotating(true);
        groupRef.current.rotation.y += 0.01 * Math.PI;
        rotationSpeed.current = 0.0125;
      }
    } else if (e.key === "ArrowRight") {
      console.log("key", e.key);

      setIsRotating(true);
      groupRef.current.rotation.y -= 0.01 * Math.PI;
      rotationSpeed.current = -0.0125;
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useFrame(() => {
    if (!isRotating) {
      // makes models slower as they come to a complete stop
      rotationSpeed.current *= dampingFactor;

      //brings models to complete stop
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      groupRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = groupRef.current.rotation.y;
    }
  });

  //   useEffect(() => {
  //     const canvas = gl.domElement;
  //     // event listeners that allow us to rotate using touch device, mouse, or keyboard
  //     canvas.addEventListener("pointerup", handlePointerUp);
  //     canvas.addEventListener("pointerdown", handlePointerDown);
  //     canvas.addEventListener("pointermove", handlePointerMove);
  //     document.addEventListener("keyup", handleKeyUp);
  //     document.addEventListener("keydown", handleKeyDown);

  //     return () => {
  //       canvas.removeEventListener("pointerup", handlePointerUp);
  //       canvas.removeEventListener("pointerdown", handlePointerDown);
  //       canvas.removeEventListener("pointermove", handlePointerMove);
  //       document.removeEventListener("keyup", handleKeyUp);
  //       document.removeEventListener("keydown", handleKeyDown);
  //     };
  //   }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  return (
    <a.group ref={groupRef}>
      <PlanetGroup
        setIsRotating={setIsRotating}
        currentFocusPoint={currentFocusPoint}
        isRotating={isRotating}
      />

      <Earth isRotating={isRotating} position={[0, -2.5, -4]} scale={0.75} />

      <Cosmonaut scale={0.005} position={[-1.5, -1.5, 8]} rotation-y={-0.05} />

      <Galaxy
        isRotating={isRotating}
        position={[-47, -50, 0]}
        scale={[30, 25, 10]}
      />
    </a.group>
  );
};

export default CanvasGroup;
