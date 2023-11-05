import HotPick from "../../assets/HotPick.png";

const TopPick = () => {
  return (
    <section className="flex flex-col items-center px-4 py-0 md:flex-row">
      <img
        src={HotPick}
        alt="Hot pick of the week"
        className="mr-4 min-h-[250px] md:w-[50%] xl:w-[40%]"
      />

      <div className="xl:ml-6 xl:w-[40%]">
        <h2 className="my-2 mt-4 w-[45%] whitespace-nowrap text-2xl uppercase lg:mb-8 xl:text-5xl">
          hot pick of the <span>week</span>
        </h2>

        <p className="text-sm leading-6 md:text-base xl:text-xl">
          Meet with our top experienced for the photographer and see some of our
          top projects and make sure everything you enjoy is seamless and
          amazing. Meet with our top experienced photographer and see some of
          our top projects and make sure everything you enjoy is seamless and
          amazing. Meet with our top experienced photographer and see some of
          our top projects and make sure everything you enjoy is seamless and
          amazing. Meet with our top experienced photographer and see some of
          our top projects and make sure everything you enjoy is seamless and
          amazing.
        </p>

        <a
          href="#"
          className="mt-2 inline-block text-xl capitalize text-[#002a34] lg:mt-5 xl:text-2xl"
        >
          read more &rarr;
        </a>
      </div>
    </section>
  );
};

export default TopPick;
