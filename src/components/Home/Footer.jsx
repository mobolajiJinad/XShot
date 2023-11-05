import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-4 px-1 md:px-3">
      <nav className="mx-2 flex flex-row items-center justify-between border-y-2 border-solid border-y-[#002a34] px-1 py-5 text-lg capitalize sm:mx-auto sm:px-[10%] md:w-[85%] md:text-xl lg:w-[75%] lg:text-2xl">
        <a
          href="#"
          className="px-1 text-[#e1b485] no-underline hover:text-white"
        >
          about
        </a>
        <Link
          to="/services"
          className="px-1 text-[#e1b485] no-underline hover:text-white"
        >
          services
        </Link>
        <Link
          to="/pricing"
          className="px-1 text-[#e1b485] no-underline hover:text-white"
        >
          pricing
        </Link>
        <Link
          to="/contact"
          className="px-1 text-[#e1b485] no-underline hover:text-white"
        >
          contact
        </Link>
      </nav>

      <div className="mx-auto my-4 mb-0 flex flex-col items-center justify-between md:w-[85%] md:flex-row lg:w-[75%]">
        <div className="ml-4">
          <span className="font-LuckiestGuy text-4xl">X</span>
          <span className="font-Lora text-2xl">Shot</span>
        </div>

        <div className="flex w-3/5 items-center justify-around">
          <i className="fab fa-google text-xl md:text-3xl"></i>
          <i className="fab fa-facebook-f text-xl md:text-3xl"></i>
          <i className="fab fa-linkedin-in text-xl md:text-3xl"></i>
          <i className="fab fa-twitter text-xl md:text-3xl"></i>
          <i className="fab fa-instagram text-xl md:text-3xl"></i>
        </div>

        <div className="w-[10%]"></div>
      </div>

      <p className="text-center text-sm md:text-lg">
        Contact us on any of our social media pages
      </p>
    </footer>
  );
};

export default Footer;
