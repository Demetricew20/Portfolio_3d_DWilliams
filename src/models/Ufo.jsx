import React, { useEffect, useRef } from "react";
import ufoScene from "../assets/3d/ufo.glb";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Ufo = ({
  currentAnimation,
  isHovering,
  isZooming,
  isAbducting,
  resetPosition,
  ...props
}) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(ufoScene);
  const { actions } = useAnimations(animations, ref);

  let initialPosition = [1, -4, 0];

  useFrame(() => {
    if (isZooming) {
      ref.current.position.y += 0.0175;
    }

    if (resetPosition) {
      ref.current.position.y = initialPosition[1];
      ref.current.position.x = initialPosition[0];
      ref.current.position.z = initialPosition[2];
      resetPosition = false;
    }
  });

  useEffect(() => {
    Object.values(actions).forEach((action) => action.stop());
    if (actions[currentAnimation]) {
      actions[currentAnimation].play();
    }
  }, [actions, currentAnimation]);

  return (
    <mesh {...props} position={initialPosition} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Ufo;
