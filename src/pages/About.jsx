import React, { useState } from "react";
import { skills, experiences, education } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { amu } from "../assets/images";

const About = () => {
  let [showSkills, setShowSkills] = useState(false);
  let [showEducation, setShowEducation] = useState(false);
  let [showExperience, setShowExperience] = useState(false);

  const handleSkillToggle = () => {
    showSkills = !showSkills;
    setShowSkills(showSkills);
  };

  const handleEducationToggle = () => {
    showEducation = !showEducation;
    setShowEducation(showEducation);
  };

  const handleExperienceToggle = () => {
    showExperience = !showExperience;
    setShowExperience(showExperience);
  };
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Demetrice
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I am a highly motivated software engineer with a strong passion for
          front-end engineering who fully embraces teamwork but is very capable
          of working independently. My strong desire to build, learn, and teach
          is equally matched by my love of software development. I bring strong
          skills in team building, communication, and leadership that will help
          companies succeed. Through my love of software development, I plan to
          make a positive impact wherever and whenever I can.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <span
          className="flex items-center cursor-pointer"
          onClick={handleSkillToggle}
        >
          {showSkills == false ? (
            <ChevronRightIcon fontSize="" className="text-3xl mt-1 mr-2" />
          ) : (
            <ExpandMoreIcon fontSize="" className="text-3xl mt-1 mr-2" />
          )}
          <h3 className="subhead-text">Skills</h3>
        </span>

        {showSkills ? (
          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="block-container w-20 h-20"
                title={skill.name}
              >
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="h-75 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="py-10">
        <span
          className="flex items-center cursor-pointer"
          onClick={handleEducationToggle}
        >
          {showEducation == false ? (
            <ChevronRightIcon fontSize="" className="text-3xl mt-1 mr-2" />
          ) : (
            <ExpandMoreIcon fontSize="" className="text-3xl mt-1 mr-2" />
          )}
          <h3 className="subhead-text">Education</h3>
        </span>

        {showEducation == true ? (
          <div className="mt-10">
            <VerticalTimeline>
              {education.map((education, index) => (
                <VerticalTimelineElement
                  key={index}
                  date={education.yearCompleted}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      {education.icon === "" ? (
                        <span></span>
                      ) : (
                        <img
                          src={education.icon}
                          className={
                            education.icon == amu
                              ? "h-[80%] object-cover"
                              : "h-[50%] object-contain"
                          }
                        />
                      )}
                    </div>
                  }
                  iconStyle={{
                    background: education.iconBg,
                  }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: education.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div key={`education-${index}`}>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {education.program}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base m-0"
                      style={{ margin: 0 }}
                    >
                      {education.schoolName}
                    </p>
                  </div>

                  {/* <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul> */}
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="py-16">
        <span
          className="flex items-center cursor-pointer"
          onClick={handleExperienceToggle}
        >
          {showExperience == false ? (
            <ChevronRightIcon fontSize="" className="text-3xl mt-1 mr-2" />
          ) : (
            <ExpandMoreIcon fontSize="" className="text-3xl mt-1 mr-2" />
          )}
          <h3 className="subhead-text">Work Experience</h3>
        </span>

        {showExperience ? (
          <div className="mt-10 flex">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      {education.icon === "" ? (
                        <span></span>
                      ) : (
                        <img
                          src={experience.icon}
                          className="w-[60%] h-[60%] object-contain"
                        />
                      )}
                    </div>
                  }
                  iconStyle={{
                    background: experience.iconBg,
                  }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div key={`experience${index}`}>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base m-0"
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
