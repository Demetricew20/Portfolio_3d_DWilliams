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

  const moveToFourthStage = () => {
    if (rotateRight) {
      if (planetRef.current.position.x >= planetPositions.stageFour[0]) {
        planetRef.current.position.x -= 0.175;
      }

      if (planetRef.current.position.y >= planetPositions.stageFour[1]) {
        planetRef.current.position.y -= 0.035;
      }

      if (planetRef.current.position.z >= planetPositions.stageFour[2]) {
        planetRef.current.position.z -= 0.075;
      }

      if (
        planetRef.current.position.x <= planetPositions.stageFour[0] &&
        planetRef.current.position.y <= planetPositions.stageFour[1]
      ) {
        setFourthStage(true);
        setFirstStage(false);
      }
    } else {
    }
  };

  const moveToThirdStage = () => {
    if (defaultStage == 3) {
      console.log(planetRef.current.position);
    }
    if (rotateRight) {
      if (planetRef.current.position.x <= planetPositions.stageThree[0]) {
        planetRef.current.position.x += 0.1625;
      }

      if (planetRef.current.position.y <= planetPositions.stageThree[1]) {
        planetRef.current.position.y += 0.035;
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
    }
  };

  const moveToSecondStage = () => {
    if (defaultStage == 3) {
      console.log(planetRef.current.position);
    }
    if (rotateRight) {
      if (planetRef.current.position.x <= planetPositions.stageTwo[0]) {
        planetRef.current.position.x += 0.185;
      }

      if (planetRef.current.position.y >= planetPositions.stageTwo[1]) {
        planetRef.current.position.y -= 0.035;
      }

      if (planetRef.current.position.z <= planetPositions.stageTwo[2]) {
        planetRef.current.position.z += 0.01;
      }

      if (
        planetRef.current.position.x >= planetPositions.stageTwo[0] &&
        planetRef.current.position.y <= planetPositions.stageTwo[1]
      ) {
        setSecondStage(true);
        setThirdStage(false);
      }
    }
  };

  const moveToFirstStage = () => {
    if (rotateRight) {
      if (planetRef.current.position.x >= planetPositions.stageOne[0]) {
        planetRef.current.position.x -= 0.195;
      }

      if (planetRef.current.position.y >= planetPositions.stageOne[1]) {
        planetRef.current.position.y -= 0.035;
      }

      if (planetRef.current.position.z <= planetPositions.stageOne[2]) {
        planetRef.current.position.z += 0.125;
      }

      if (
        planetRef.current.position.x <= planetPositions.stageOne[0] &&
        planetRef.current.position.y <= planetPositions.stageOne[1]
      ) {
        setFirstStage(true);
        setSecondStage(false);
      }
    }
  };

  const setStage = () => {
    console.log("setting stage");
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

  useFrame((_, delta) => {
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

    if (isRotating) {
      if (rotateRight) {
        // if (
        //   planetRef.current.position.x <= planetPositions.stageOne[0] &&
        //   planetRef.current.position.y <= planetPositions.stageOne[1] &&
        //   !isFirstStage
        // ) {
        //   setFirstStage(true);
        // }

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
        planetRef.current.position.x += 0.05;
        planetRef.current.position.z += 0.035;
      }
      // planetRef.current.position.x -= 0.005;
      // planetRef.current.position.z -= 0.0004;
    }
  });

  useEffect(() => {
    setStage();
  }, [defaultStage]);

  scene.renderOrder = 1;

  return (
    <mesh {...props} ref={planetRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Planet;
