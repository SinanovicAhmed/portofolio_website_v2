import { Link } from "react-scroll";
import { navigationLinks } from "../constants/navigationLinks";
import Hamburger from "hamburger-react";
import { useState } from "react";
import useNavbarBackground from "../hooks/useNavbarBackground";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { showBackground } = useNavbarBackground();

  return (
    <nav
      className={`z-10 w-full fixed flex flex-col transition-all duration-500 backdrop-blur-sm ${
        showBackground ? "bg-primary-gray-light bg-opacity-20" : ""
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-10 h-16 max-w-[1200px] flex justify-between items-center">
        <h2 data-aos="fade-down" data-aos-delay="1500" className="text-2xl text-white">
          <span className="font-bold text-primary-yellow">SA</span>dev
        </h2>
        <ul className="hidden sm:flex gap-8 text-white">
          {navigationLinks.map((link, index) => (
            <li data-aos="fade-down" data-aos-delay={1500 + (index + 1) * 100} className="cursor-pointer" key={link.id}>
              <Link offset={-80} activeClass="text-primary-yellow" smooth spy to={link.id}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div data-aos="fade-down" data-aos-delay="1600" className="sm:hidden w-[48px] h-[48px]">
          <Hamburger toggled={isOpen} toggle={setOpen} color={"white"} size={25} />;
        </div>
      </div>
      {isOpen && (
        <ul className="w-full flex sm:hidden flex-col items-center gap-3 text-white animate-fade-in">
          {navigationLinks.map((link) => (
            <li className="cursor-pointer" key={link.id}>
              <Link offset={-60} activeClass="text-primary-yellow" smooth spy to={link.id}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
