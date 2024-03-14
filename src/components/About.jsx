import SectionTitle from "./SectionTitle";
import cv from "../assets/files/cv.pdf";
const About = () => {
  return (
    <section id="about" className="w-full bg-primary-gray-light pb-20">
      <SectionTitle title={"About me"} />
      <div className="mx-auto flex justify-center md:justify-between items-center max-w-[1200px] px-4 sm:px-10 pt-8">
        <div className="flex flex-col items-center md:items-start min-w-[300px] max-w-[500px]">
          <h2 className="text-gray md:text-lg font-semibold pb-4">Hi there, I am Ahmed Sinanović</h2>
          <p className="text-gray text-center md:text-start text-sm md:text-base font-light pb-6">
            I am Ahmed Sinanović, a dedicated Software Engineer and Web Developer. <br /> I am driven by a passion for
            continuous learning and ongoing exploration in the ever-evolving world of web development. <br /> For a
            closer look at my work, feel free to explore my projects on{" "}
            <a href="https://github.com/SinanovicAhmed" target="_blank" rel="noopener" className="text-primary-yellow">
              GitHub
            </a>
          </p>

          <a href={cv} download="cv" target="_blank" rel="noreferrer">
            <button className="text-primary-yellow p-2 border-2 border-primary-yellow">Download CV</button>
          </a>
        </div>
        <div className="hidden md:block min-w-[300px] max-w-[400px]">
          <img src="/images/photoofme.png" alt="about me photo" className="w-full h-auto opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default About;
