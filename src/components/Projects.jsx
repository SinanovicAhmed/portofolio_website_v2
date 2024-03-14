import Button from "./Button";
import { projects } from "../constants/projects";
import SectionTitle from "./SectionTitle";
import { useState } from "react";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(2);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 2);
  };

  const loadLessProjects = () => {
    setVisibleProjects(2);
  };

  return (
    <section id="projects" className="w-full bg-primary-gray-dark py-16">
      <SectionTitle title={"Projects"} />
      <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-2 content-center justify-items-center gap-16 px-4 sm:px-10 pt-16">
        {projects.slice(0, visibleProjects).map((project) => (
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            key={project.image}
            className="group relative min-w-[200px] max-w-[400px] rounded-md hover:cursor-pointer"
          >
            <img src={project.image} alt="about me photo" className="w-full h-auto" />
            <div
              className="absolute bottom-0 p-4 w-full h-full hidden group-hover:flex flex-col justify-between 
                          bg-primary-gray-dark bg-opacity-95 backdrop-blur-sm animate-fade-in rounded-md"
            >
              <h2 className="text-white text-lg font-semibold pb-2 border-b-2 border-primary-yellow">
                {project.header}
              </h2>
              <p className="text-gray">{project.text}</p>
              <span className="flex gap-4">
                <a href={project.code} target="_blank" rel="noopener">
                  <Button text={"View Code"} />
                </a>
                <a href={project.demo} target="_blank" rel="noopener">
                  <Button text={"Demo"} />
                </a>
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-10">
        {visibleProjects === 2 ? (
          <button onClick={loadMoreProjects} className="text-primary-yellow hover:font-semibold">
            Show More
          </button>
        ) : (
          <button onClick={loadLessProjects} className="text-primary-yellow hover:font-semibold">
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
