const SectionTitle = ({ title }) => {
  return (
    <div className="relative flex justify-center">
      <h2 className=" text-white text-opacity-5 text-5xl md:text-6xl font-black tracking-wider">
        {title.toUpperCase()}
      </h2>
      <h4 className="absolute px-12 bottom-0 text-primary-yellow text-base md:text-lg font-bold border-b-2 border-primary-yellow">
        {title}
      </h4>
    </div>
  );
};

export default SectionTitle;
