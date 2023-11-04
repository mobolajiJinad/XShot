import { useState } from "react";
import HamburgerSVG from "../assets/hamburger.svg";
import HamburgerOpenSVG from "../assets/hamburgerOpen.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative w-full bg-[#002a34] px-6 py-4 md:py-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="font-LuckiestGuy text-4xl text-[#e1b485] md:text-8xl">
            X
          </h1>
          <h2 className="font-Lora text-xl uppercase text-[#e1b485] md:text-5xl">
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

        <NavItems isOpen={menuOpen} />
      </div>
    </header>
  );
};

const NavItems = ({ isOpen }) => {
  return (
    <nav
      className={`${
        isOpen ? "right-0" : "right-full"
      } absolute top-16 w-64 overflow-y-auto bg-[#002a34] transition-transform duration-500 ease-in-out sm:static sm:left-0 sm:w-auto sm:overflow-y-visible`}
    >
      <ul className="flex flex-col p-4 sm:flex-row sm:items-center sm:space-x-4 sm:p-0">
        <NavItem href="#" text="Home" />
        <NavItem href="#" text="About" />
        <NavItem href="#" text="Services" />
        <NavItem href="#" text="Pricing" />
        <NavItem href="#" text="Contact" />
      </ul>
    </nav>
  );
};

const NavItem = ({ href, text }) => {
  return (
    <li>
      <a
        href={href}
        className="my-2 block text-xl capitalize text-[#e1b485] no-underline transition-colors hover:text-[#fff] xl:text-2xl"
      >
        {text}
      </a>
    </li>
  );
};

export default Header;
