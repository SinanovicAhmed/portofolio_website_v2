import { HashLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="bg-primary-gray-light w-full h-dvh flex justify-center items-center">
      <HashLoader color="#D0A534" size={80} />
    </div>
  );
};

export default LoadingPage;
