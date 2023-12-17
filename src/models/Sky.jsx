import { useGLTF } from "@react-three/drei";
import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import skyScene from "../assets/3d/sky.glb";

const Sky = ({ isRotating }) => {
  //primitive element that only consumes the model that it uses
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  useFrame((_, delta) => {
    //use frame second param takes in delta
    if (isRotating) {
      //controls speed of rotation
      skyRef.current.rotation.y += 0.1 * delta;
    }
  });

  return (
    <mesh>
      <primitive object={sky.scene} ref={skyRef} />
    </mesh>
  );
};

export default Sky;
