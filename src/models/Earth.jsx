import React, { useEffect, useRef } from "react";

import earthScene from "../assets/3d/earth_planet.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

const Earth = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(earthScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      //start when island isn't rotating, will stop plane if island is rotating
      //   actions["Take 001"].play();
    } else {
      //   actions["Take 001"].play();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Earth;
