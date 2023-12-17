import React, { useEffect, useRef } from "react";

import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = ({ isRotating, ...props }) => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useFrame(({ clock, camera }) => {
    //update y position to simulate flight
    //this will allow the bird to move as the clock continues
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 4;

    //will change the direction when bird exits camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      //changes direction by rotating bird 180 degrees on y axis
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      //resets direction
      birdRef.current.rotation.y = 0;
    }

    if (birdRef.current.rotation.y === 0) {
      //moves bird forward, while pushing the bird backwards (becoming smaller) in the canvas
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      //moves backward
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  useEffect(() => {
    actions["Take 001"].play();
  });

  return (
    <mesh position={[-4, 2, -3]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
