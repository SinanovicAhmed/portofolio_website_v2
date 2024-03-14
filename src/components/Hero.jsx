const Hero = () => {
  return (
    <section className="h-screen bg-hero-image bg-no-repeat bg-cover bg-center">
      <div
        className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b 
                 from-primary-gray-light via-transparent to-primary-gray-light"
      >
        <div className="max-w-[800px] px-4 sm:px-10 text-center">
          <h2 className="text-3xl md:text-4xl text-white">
            Hi, I am <span className="text-primary-yellow font-semibold">Ahmed Sinanović</span>
          </h2>
          <h4 className="pt-2 md:text-lg font-semibold text-white">Software Engineer and a Web Developer</h4>
          <p className="pt-8 text-sm md:text-base text-white font-light">
            Welcome to my digital realm, where creativity meets functionality. As a full-stack web developer, I thrive
            on the dynamic synergy of code and design, building intuitive and powerful websites that leave a lasting
            impression.
          </p>
        </div>
        <div className="flex gap-6 pt-6">
          <a className="p-2" href="https://github.com/SinanovicAhmed" target="_blank" rel="noopener">
            <img src="/icons/github.png" alt="github icon" width="20" height="20" />
          </a>
          <a
            className="p-2"
            href="https://www.linkedin.com/in/ahmed-sinanovi%C4%87-28b3b9225/"
            target="_blank"
            rel="noopener"
          >
            <img src="/icons/linkedin.png" alt="linkedin icon" width="20" height="20" />
          </a>
          <a className="p-2" href="https://www.instagram.com/sinanovicah/" target="_blank" rel="noopener">
            <img src="/icons/instagram.png" alt="instagram icon" width="20" height="20" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
