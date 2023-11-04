import ContactFooter from "../../assets/ContactFooter.png";

const Footer = () => {
  return (
    <section className="">
      <div className="m-auto flex w-3/4 flex-col items-center justify-around px-0 py-4 md:flex-row">
        <img
          src={ContactFooter}
          alt="An image"
          className="mb-2 w-full md:w-1/2"
        />

        <div className="w-full md:w-1/2">
          <h2 className="text-center font-MacondoSwashCaps text-black">
            Lets Plan Your Perfect{" "}
            <span className="font-MacondoSwashCaps text-[#002a34]">
              PHOTO SHOOT
            </span>
          </h2>
          <p className="mx-0 my-3 text-center text-base text-[#002a34] md:my-5">
            Densel washington street, inufele street Densel washington street,
            inufele streets Densel washington street, inufele street Densel
            washington street, inufele streets
          </p>
          <button className="mx-auto my-4 block cursor-pointer rounded-2xl border-2 border-solid border-[#002a34] bg-transparent px-10 py-2 font-Lora capitalize text-[#002a34]">
            book now
          </button>
        </div>
      </div>

      <h2 className="mx-0 my-8 text-center font-MacondoSwashCaps text-3xl text-[#002a34] md:text-4xl">
        we are more than a studio
      </h2>
    </section>
  );
};

export default Footer;
