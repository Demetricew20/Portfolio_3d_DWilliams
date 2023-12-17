import React from "react";
import { arrow } from "../assets/icons";
import { Link } from "react-router-dom";

const InfoBox = ({ text, link, btnText }) => (
  //customizes popup at different stages
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center"></p>
    {text}
    <Link className="neo-brutalism-white neo-btn mt-4" to={link}>
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue 
    py-4 px-8 text-white mx-5"
    >
      Hello, I am <span className="font-semibold">Demetrice Williams</span>👋🏾
      <br />A Software Engineer from San Antonio, TX
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way."
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Led multiple projects from initial designs to the first product release...."
      link="/projects"
      btnText="Visit My Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a dev? I'm just a few keystrokes away!"
      link="/contact"
      btnText="Let's work together!"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  // displays content based on the currentStage of the island when rotating
  return renderContent[currentStage] || null;
};

export default HomeInfo;
