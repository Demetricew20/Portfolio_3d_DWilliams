import React, { useEffect, useRef, useState } from "react";

import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
import { planetPositions } from "../constants";

const Planet = ({
  isRotating,
  rotateRight,
  rotateLeft,
  defaultStage,
  planetScene,
  setCurrentStage,
  ...props
}) => {
  const planetRef = useRef();
  const { scene, animations } = useGLTF(planetScene);

  // const { scene, animations } = useGLTF(treasureScene);
  const { actions } = useAnimations(animations, planetRef);
  const [isFirstStage, setFirstStage] = useState(false);
  const [isSecondStage, setSecondStage] = useState(false);
  const [isThirdStage, setThirdStage] = useState(false);
  const [isFourthStage, setFourthStage] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const moveToFourthStage = () => {
    if (rotateRight) {
      if (planetRef.current.position.x >= planetPositions.stageFour[0]) {
        planetRef.current.position.x -= 0.275;
      }

      if (planetRef.current.position.y >= planetPositions.stageFour[1]) {
        planetRef.current.position.y -= 0.035;
      }

      if (planetRef.current.position.z >= planetPositions.stageFour[2]) {
        planetRef.current.position.z -= 0.095;
      }

      if (
        planetRef.current.position.x <= planetPositions.stageFour[0] &&
        planetRef.current.position.y <= planetPositions.stageFour[1]
      ) {
        setFourthStage(true);
        setFirstStage(false);
      }
    } else {
      //will rotate from stage three
      if (planetRef.current.position.x >= planetPositions.stageFour[0]) {
        planetRef.current.position.x -= 0.275;
      }

      if (planetRef.current.position.y >= planetPositions.stageFour[1]) {
        planetRef.current.position.y -= 0.0475;
      }

      if (planetRef.current.position.z <= planetPositions.stageFour[2]) {
        planetRef.current.position.z += 0.095;
      }

      if (
        planetRef.current.position.x <= planetPositions.stageFour[0] &&
        planetRef.current.position.y <= planetPositions.stageFour[1]
      ) {
        setFourthStage(true);
        setThirdStage(false);
      }
    }
  };

  const moveToThirdStage = () => {
    if (rotateRight) {
      if (planetRef.current.position.x <= planetPositions.stageThree[0]) {
        planetRef.current.position.x += 0.2;
      }

      if (planetRef.current.position.y <= planetPositions.stageThree[1]) {
        planetRef.current.position.y += 0.05;
      }

      if (planetRef.current.position.z >= planetPositions.stageThree[2]) {
        planetRef.current.position.z -= 0.035;
      }

      if (
        planetRef.current.position.x >= planetPositions.stageThree[0] &&
        planetRef.current.position.y >= planetPositions.stageThree[1]
      ) {
        setThirdStage(true);
        setFourthStage(false);
      }
    } else {
      if (planetRef.current.position.x >= planetPositions.stageThree[0]) {
        planetRef.current.position.x -= 0.275;
      }

      if (planetRef.current.position.y <= planetPositions.stageThree[1]) {
        planetRef.current.position.y += 0.05;
      }

      if (planetRef.current.position.z >= planetPositions.stageThree[2]) {
        planetRef.current.position.z -= 0.035;
      }

      if (
        planetRef.current.position.x >= planetPositions.stageThree[0] &&
        planetRef.current.position.y >= planetPositions.stageThree[1]
      ) {
        setThirdStage(true);
        setSecondStage(false);
      }
    }
  };

  const moveToSecondStage = () => {
    if (rotateRight) {
      if (planetRef.current.position.x <= planetPositions.stageTwo[0]) {
        planetRef.current.position.x += 0.275;
      }

      if (planetRef.current.position.y >= planetPositions.stageTwo[1]) {
        planetRef.current.position.y -= 0.05;
      }

      if (planetRef.current.position.z <= planetPositions.stageTwo[2]) {
        planetRef.current.position.z += 0.001;
      }

      if (
        planetRef.current.position.x >= planetPositions.stageTwo[0] &&
        planetRef.current.position.y <= planetPositions.stageTwo[1]
      ) {
        setSecondStage(true);
        setThirdStage(false);
      }
    } else {
      //moving from first stage to second
      if (planetRef.current.position.x <= planetPositions.stageTwo[0]) {
        planetRef.current.position.x += 0.275;
      }

      if (planetRef.current.position.y <= planetPositions.stageTwo[1]) {
        planetRef.current.position.y += 0.05;
      }

      if (planetRef.current.position.z >= planetPositions.stageTwo[2]) {
        planetRef.current.position.z -= 0.1;
      }

      if (
        planetRef.current.position.x >= planetPositions.stageTwo[0] &&
        planetRef.current.position.y >= planetPositions.stageTwo[1]
      ) {
        setSecondStage(true);
        setFirstStage(false);
      }
    }
  };

  const moveToFirstStage = () => {
    if (rotateRight) {
      if (planetRef.current.position.x >= planetPositions.stageOne[0]) {
        planetRef.current.position.x -= 0.225;
      }

      if (planetRef.current.position.y >= planetPositions.stageOne[1]) {
        planetRef.current.position.y -= 0.035;
      }

      if (planetRef.current.position.z <= planetPositions.stageOne[2]) {
        planetRef.current.position.z += 0.2;
      }

      if (
        planetRef.current.position.x <= planetPositions.stageOne[0] + 1 &&
        planetRef.current.position.y <= planetPositions.stageOne[1] + 1
      ) {
        setCurrentStage(defaultStage);
        setFirstStage(true);
        setSecondStage(false);
      }
    } else {
      //from fourth stage to first
      if (planetRef.current.position.x <= planetPositions.stageOne[0]) {
        planetRef.current.position.x += 0.275;
      }

      if (planetRef.current.position.y <= planetPositions.stageOne[1]) {
        planetRef.current.position.y += 0.035;
      }

      if (planetRef.current.position.z <= planetPositions.stageOne[2]) {
        planetRef.current.position.z += 0.2;
      }

      if (
        planetRef.current.position.x >= planetPositions.stageOne[0] &&
        planetRef.current.position.y >= planetPositions.stageOne[1]
      ) {
        setCurrentStage(defaultStage);
        setFirstStage(true);
        setFourthStage(false);
      }
    }
  };

  const setStage = () => {
    switch (defaultStage) {
      case 1:
        setFirstStage(true);
        setFourthStage(false);
        setThirdStage(false);
        setSecondStage(false);
        break;
      case 2:
        setFirstStage(false);
        setFourthStage(false);
        setThirdStage(false);
        setSecondStage(true);
        break;
      case 3:
        setFirstStage(false);
        setFourthStage(false);
        setThirdStage(true);
        setSecondStage(false);
        break;
      case 4:
        setFirstStage(false);
        setFourthStage(true);
        setThirdStage(false);
        setSecondStage(false);
        break;
      default:
        console.log("Error - Default Stage was not set");
    }
  };

  useFrame((state, delta) => {
    if (defaultStage == 1) {
      actions["Scene"].play();
    }

    switch (defaultStage) {
      case 1:
        actions["Scene"].play();
        break;
      case 2:
        //zen
        actions["Scene"].play();
        break;
      case 3:
        //monster
        actions["Main Animation 001"].play();
        break;
      case 4:
        //alien
        actions["Scene animation"].play();
        break;
      default:
        console.log(
          `Can not run animations for planet at stage ${defaultStage}.`
        );
    }

    if (isHovered && !isRotating) {
      planetRef.current.rotation.y -= 0.0005;
    }

    if (isRotating) {
      if (rotateRight) {
        if (isFirstStage) {
          moveToFourthStage();
        }

        if (isSecondStage) {
          moveToFirstStage();
        }

        if (isThirdStage) {
          moveToSecondStage();
        }

        if (isFourthStage) {
          moveToThirdStage();
        }
      } else {
        if (isFirstStage) {
          moveToSecondStage();
        }

        if (isSecondStage) {
          moveToThirdStage();
        }

        if (isThirdStage) {
          moveToFourthStage();
        }

        if (isFourthStage) {
          moveToFirstStage();
        }
      }
    }
  });

  useEffect(() => {
    setStage();
  }, [defaultStage]);

  return (
    <mesh
      {...props}
      ref={planetRef}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={(event) => setIsHovered(false)}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Planet;
