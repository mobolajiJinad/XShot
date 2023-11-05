import { useState } from "react";
import { Link } from "react-router-dom";

import HamburgerSVG from "../assets/hamburger.svg";
import HamburgerOpenSVG from "../assets/hamburgerOpen.svg";

const Header = ({ bgColor, xColor, shotColor }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: `${bgColor}` }}
      className={"relative z-50 w-full px-6 py-4 md:py-1"}
    >
      <div className="flex items-center justify-between xl:justify-between">
        <div className="flex items-center">
          <h1
            className={`font-LuckiestGuy text-4xl text-[${xColor}] md:text-8xl`}
          >
            X
          </h1>
          <h2
            className={`font-Lora text-xl uppercase text-[${shotColor}] md:text-5xl`}
          >
            Shot
          </h2>
        </div>

        <div
          className="cursor-pointer sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <img src={HamburgerOpenSVG} alt="Close menu" />
          ) : (
            <img src={HamburgerSVG} alt="Open menu" />
          )}
        </div>

        <NavItems isOpen={menuOpen} bgColor={bgColor} />
      </div>
    </header>
  );
};

const NavItems = ({ isOpen, bgColor }) => {
  return (
    <nav
      style={{ backgroundColor: `${bgColor}` }}
      className={`${
        isOpen ? `right-0` : "right-full"
      } absolute top-20 w-[60%] overflow-y-auto transition-transform duration-500 ease-in-out sm:static sm:left-0 sm:w-auto sm:overflow-y-visible sm:px-6`}
    >
      <ul className="flex flex-col p-4 sm:flex-row sm:items-center sm:space-x-4 sm:p-0">
        <NavItem href="/" text="Home" />
        <NavItem href="#" text="About" />
        <NavItem href="/services" text="Services" />
        <NavItem href="/pricing" text="Pricing" />
        <NavItem href="/contact" text="Contact" />
      </ul>
    </nav>
  );
};

const NavItem = ({ href, text }) => {
  return (
    <li>
      <Link
        to={href}
        className="my-2 block text-xl capitalize text-[#e1b485] no-underline transition-colors hover:text-[#fff] xl:text-2xl"
      >
        {text}
      </Link>
    </li>
  );
};

export default Header;
