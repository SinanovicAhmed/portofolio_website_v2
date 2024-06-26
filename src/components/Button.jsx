const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-sm md:text-base text-primary-yellow py-2 px-4 border-2 border-primary-yellow hover:bg-primary-yellow font-semibold hover:text-black transition-all"
    >
      {text}
    </button>
  );
};

export default Button;
