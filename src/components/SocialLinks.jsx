const SocialLinks = () => {
  return (
    <div className="flex gap-6 pt-6">
      <a
        className="p-2 hover:drop-shadow-white transition-shadow"
        href="https://github.com/SinanovicAhmed"
        target="_blank"
        rel="noopener"
      >
        <img src="/icons/github.png" alt="github icon" width="20" height="20" />
      </a>
      <a
        className="p-2 hover:drop-shadow-white transition-shadow"
        href="https://www.linkedin.com/in/ahmed-sinanovi%C4%87-28b3b9225/"
        target="_blank"
        rel="noopener"
      >
        <img src="/icons/linkedin.png" alt="linkedin icon" width="20" height="20" />
      </a>
      <a
        className="p-2 hover:drop-shadow-white transition-shadow"
        href="https://www.instagram.com/sinanovicah/"
        target="_blank"
        rel="noopener"
      >
        <img src="/icons/instagram.png" alt="instagram icon" width="20" height="20" />
      </a>
    </div>
  );
};

export default SocialLinks;
