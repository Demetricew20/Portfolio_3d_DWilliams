import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader.jsx";
import HomeInfo from "../components/HomeInfo";

import outerSpaceSound from "../assets/outer_space.mp3";
import { soundoff, soundon } from "../assets/icons";
import CanvasGroup from "../components/CanvasGroup.jsx";

const Home = () => {
  // audio
  const audioRef = useRef(new Audio(outerSpaceSound));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  let [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale = null;
    let screenPosition = null;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [-3, -4, -3];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  const handleSoundToggle = () => {
    isPlayingMusic = !isPlayingMusic;
    setIsPlayingMusic(isPlayingMusic);
  };

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-20 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full bg-black h-screen ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{
          fov: 90,
          near: 1,
          far: 1000,
          position: [0, 0, 12],
          rotation: [-0.35, 0, 0],
        }}
      >
        <Suspense fallback={<Loader />}>
          {/* simulates light that comes from a distance (i.e. Sun light)*/}
          <directionalLight position={[1, 1, 1]} intensity={0} />
          {/* equally lights elements in rendering  */}
          <ambientLight intensity={1} />
          {/* illuminates screen with a gradient. helps bring details on rendering out */}
          <hemisphereLight
            skyColor="#000000"
            groundColor="#000000"
            intensity={1}
          />

          <CanvasGroup
            isRotating={isRotating}
            position={[-47, -50, 0]}
            scale={[30, 25, 10]}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundon : soundoff}
          alt="sound"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={() => handleSoundToggle()}
        />
      </div>
    </section>
  );
};

export default Home;
