const Button = ({ text }) => {
  return (
    <button className="text-sm md:text-base text-primary-yellow p-2 border-2 border-primary-yellow hover:bg-primary-yellow font-semibold hover:text-black transition-all">
      {text}
    </button>
  );
};

export default Button;
