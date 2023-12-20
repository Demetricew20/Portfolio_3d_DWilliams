import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { GitHub } from "@mui/icons-material";
import LinkIcon from "@mui/icons-material/Link";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500"></div>

      <div className="flex flex-wrap mt-10 mb-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  className="w-1/2 h-1/2 object-contain"
                  src={project.iconUrl}
                  alt="Project Icon"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                {project.deployLink ? (
                  <Link
                    to={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    <LinkIcon />
                  </Link>
                ) : (
                  ""
                )}
                {project.projectLink ? (
                  <Link
                    to={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-black"
                  >
                    <GitHub />
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
