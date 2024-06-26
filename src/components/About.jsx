import SectionTitle from "./SectionTitle";
import cv from "../assets/files/cv.pdf";
import Button from "./Button";
const About = () => {
  return (
    <section id="about" className="w-full bg-primary-gray-light pb-28">
      <SectionTitle title={"About me"} />
      <div className="mx-auto flex gap-16 justify-center lg:justify-between items-center max-w-[1200px] px-4 sm:px-10 pt-16">
        <div
          data-aos="fade-right"
          className="h-full flex flex-col items-center lg:items-start min-w-[300px] max-w-[500px]"
        >
          <h2 className="text-gray md:text-lg text-center lg:text-start font-semibold pb-4 bottom-2 b">
            Hi there, welcome to my portofolio website
          </h2>
          <p className="text-gray text-center lg:text-start text-sm md:text-base font-light pb-6">
            I am Ahmed Sinanović, a dedicated Software Engineer and Web Developer. <br />
            <br /> I am driven by a passion for continuous learning and ongoing exploration in the ever-evolving world
            of web development. <br />
            <br /> Few technologies I&apos;ve been working with recently include JS, TS, ReactJS, NextJS, NodeJS and
            more. <br /> <br />
            For a closer look at my work, feel free to explore my projects on{" "}
            <a href="https://github.com/SinanovicAhmed" target="_blank" rel="noopener" className="text-primary-yellow">
              GitHub
            </a>
          </p>

          <a href={cv} download="cv" target="_blank" rel="noreferrer">
            <Button text={"Download CV"} />
          </a>
        </div>
        <div data-aos="flip-left" className="hidden lg:block min-w-[300px] max-w-[400px] hover:rotate-12 opacity-90">
          <img src="/images/photoofme.png" alt="about me photo" className="w-full h-full opacity-70 drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default About;
