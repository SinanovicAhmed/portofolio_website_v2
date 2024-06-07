import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import MainPage from "./pages/MainPage";
import LoadingPage from "./pages/LoadingPage";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      once: true,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <LoadingPage />;

  return <MainPage />;
};

export default App;
