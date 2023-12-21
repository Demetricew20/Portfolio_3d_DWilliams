import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import HomeInfo from "../components/HomeInfo";

import outerSpaceSound from "../assets/outer_space.mp3";
import {
  githubWhite,
  linkedin,
  linkedinRound,
  soundoff,
  soundon,
} from "../assets/icons";
import CanvasGroup from "../components/CanvasGroup";
import { socialLinks } from "../constants";
import { Loader } from "@react-three/drei";

const Home = ({ isLoadingCanvas, setIsLoadingCanvas, ...props }) => {
  const sectionRef = useRef();
  // audio
  const audioRef = useRef(new Audio(outerSpaceSound));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  let [isPlayingMusic, setIsPlayingMusic] = useState(false);
  // let [loadingCanvas, setLoadingCanvas] = useState(true);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const handleSoundToggle = () => {
    isPlayingMusic = !isPlayingMusic;
    setIsPlayingMusic(isPlayingMusic);
  };

  const handleLoading = () => {
    setTimeout(() => {
      setIsLoadingCanvas(false);
    }, 5000);
  };

  return (
    <section className="w-full h-screen relative" ref={sectionRef}>
      <div className="absolute top-20 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && isLoadingCanvas == false && (
          <HomeInfo currentStage={currentStage} />
        )}
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
        <Suspense fallback={null}>
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
      <Loader initialState={(active) => handleLoading()} />

      {!isLoadingCanvas && (
        <div>
          <div className="absolute bottom-2 left-2">
            <img
              src={!isPlayingMusic ? soundon : soundoff}
              alt="sound"
              className="w-10 h-10 cursor-pointer object-contain"
              onClick={() => handleSoundToggle()}
            />
          </div>

          {!isRotating && (
            <div className="absolute bottom-2 text-center w-full helper-text">
              <span>
                Rotate planets with arrow keys or clicking left/right side of
                screen
              </span>
            </div>
          )}

          <div className="absolute bottom-2 right-2">
            <a href={socialLinks[1].link} target="_blank">
              <img
                src={githubWhite}
                alt="sound"
                className="w-10 h-10 cursor-pointer object-contain mb-5"
              />
            </a>

            <a href={socialLinks[2].link} target="_blank">
              <img
                src={linkedinRound}
                alt="sound"
                className="w-10 h-10 cursor-pointer object-contain"
              />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
