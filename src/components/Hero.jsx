import SocialLinks from "./SocialLinks";
import { TypewriterEffect } from "./typewriter";

const Hero = () => {
  const heroParagraph = "Hi, I am Ahmed Sinanović";
  const words = heroParagraph.split(" ").map((word) => ({
    text: word,
    className: `text-3xl md:text-4xl ${
      (word == "Ahmed") | (word == "Sinanović") ? "text-primary-yellow font-semibold " : "text-white font-normal "
    }`,
  }));

  return (
    <section className="h-screen bg-hero-image bg-no-repeat bg-cover bg-center">
      <div
        className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b 
                 from-primary-gray-light via-transparent to-primary-gray-light"
      >
        <div className="max-w-[800px] px-4 sm:px-10 text-center">
          <TypewriterEffect words={words} />
          <h4 data-aos="fade-up" data-aos-delay="1000" className="pt-2 md:text-lg font-semibold text-white">
            Software Engineer and a Web Developer
          </h4>
          <p data-aos="fade-up" data-aos-delay="1200" className="pt-8 text-sm md:text-base text-white font-light">
            Welcome to my digital realm, where creativity meets functionality. As a full-stack web developer, I thrive
            on the dynamic synergy of code and design, building intuitive and powerful websites that leave a lasting
            impression.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="1400">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Hero;
