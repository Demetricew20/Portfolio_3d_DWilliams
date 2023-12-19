import React, { useRef, useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from "@react-spring/three";
import TreasurePlanet from "../models/Planet";
import treasurePlanetScene from "../assets/3d/treasure_planet.glb";
import zenPlanetScene from "../assets/3d/zen_planet.glb";
import monsterPlanetScene from "../assets/3d/monster_planet.glb";
import alienPlanetScene from "../assets/3d/alien_planet.glb";
import ZenPlanet from "../models/ZenPlanet";
import AlienPlanet from "../models/AlienPlanet";
import MonsterPlanet from "../models/MonsterPlanet";
import { planetPositions } from "../constants";
import Planet from "../models/Planet";

const PlanetGroup = ({
  isRotating,
  setIsRotating,
  currentFocusPoint,
  setCurrentStage,
  ...props
}) => {
  const groupRef = useRef();
  const [rotatingRight, setRotatingRight] = useState(false);
  const [rotatingLeft, setRotatingLeft] = useState(false);
  const { gl, viewport } = useThree();

  const lastX = useRef(0);
  //controls speed of rotation and how fast it stops after rotating
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  };

  // const handlePointerMove = (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();

  //   if (isRotating) {
  //     const clientX = e.touches ? e.touches[0].clientX : e.clientX;

  //     //calculates change in horizontal position
  //     const delta = (clientX - lastX.current) / viewport.width;

  //     groupRef.current.rotation.y += delta * 0.01 * Math.PI;

  //     lastX.current = clientX;

  //     rotationSpeed.current = delta * 0.01 * Math.PI;
  //   }
  // };

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    //figures out if we are using mobile (touches) or desktop device the grabs x position
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;

    lastX.current = clientX;

    console.log(clientX);

    //will need to use breakpoints if I use this method
    if (clientX > 700) {
      setRotatingRight(true);
      setRotatingLeft(false);
    } else {
      // setRotatingLeft(true);
      // setRotatingRight(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      // setRotatingLeft(true);
      // setRotatingRight(false);
    } else if (e.key === "ArrowRight") {
      setIsRotating(true);
      setRotatingRight(true);
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  useFrame(() => {
    if (!isRotating) {
      // // makes models slower as they come to a complete stop
      // rotationSpeed.current *= dampingFactor;
      // //brings models to complete stop
      // if (Math.abs(rotationSpeed.current) < 0.001) {
      //   rotationSpeed.current = 0;
      // }
      // groupRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      // const rotation = groupRef.current.rotation.y;
      /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
      //   const normalizedRotation =
      //     ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
      //   // Set the current stage based on the island's orientation
      //   // Stages can be considered stopping points where we would want to display info
      //   switch (true) {
      //     case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
      //       setCurrentStage(4);
      //       break;
      //     case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
      //       setCurrentStage(3);
      //       break;
      //     case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
      //       setCurrentStage(2);
      //       break;
      //     case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
      //       setCurrentStage(1);
      //       break;
      //     default:
      //       setCurrentStage(null);
      //   }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    // event listeners that allow us to rotate using touch device, mouse, or keyboard
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointerdown", handlePointerDown);
    // canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keyup", handleKeyUp);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      // canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keyup", handleKeyUp);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [gl, handlePointerDown, handlePointerUp]);

  return (
    <a.group ref={groupRef}>
      {/* TreasurePlanet */}
      <Planet
        defaultStage={1}
        planetScene={treasurePlanetScene}
        rotateRight={rotatingRight}
        rotateLeft={rotatingLeft}
        isRotating={isRotating}
        position={planetPositions.stageOne}
        setCurrentStage={setCurrentStage}
        scale={[0.055, 0.035, 0.05]}
        rotation-y={0.25}
      />

      {/* Zen Planet */}

      <Planet
        rotateRight={rotatingRight}
        rotateLeft={rotatingLeft}
        isRotating={isRotating}
        position={planetPositions.stageTwo}
        planetScene={zenPlanetScene}
        defaultStage={2}
        setCurrentStage={setCurrentStage}
        scale={[0.95, 0.675, 0.75]}
      />
      {/* Monster Planet */}

      <Planet
        isRotating={isRotating}
        rotateRight={rotatingRight}
        rotateLeft={rotatingLeft}
        position={planetPositions.stageThree}
        scale={[0.25, 0.275, 0.25]}
        planetScene={monsterPlanetScene}
        defaultStage={3}
        setCurrentStage={setCurrentStage}
        rotation-y={1.25}
      />
      {/* Alien Planet */}

      <Planet
        isRotating={isRotating}
        rotateRight={rotatingRight}
        rotateLeft={rotatingLeft}
        position={planetPositions.stageFour}
        defaultStage={4}
        planetScene={alienPlanetScene}
        setCurrentStage={setCurrentStage}
        scale={[1.35, 1, 1.15]}
        rotation-y={0.15}
      />
    </a.group>
  );
};

export default PlanetGroup;
