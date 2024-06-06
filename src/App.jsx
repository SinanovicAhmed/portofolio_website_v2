import AOS from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 700,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
