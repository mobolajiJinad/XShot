const Main = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around bg-[#002a34] bg-mainBackground bg-cover bg-center">
      <div className="flex h-1/2 flex-col items-center md:h-3/4">
        <h1 className="mb-2 pt-8 text-center font-RuslanDisplay text-4xl uppercase md:text-6xl">
          we live photography
        </h1>
        <p className="text-lg md:text-2xl">
          Let's plan your perfect photo shoot
        </p>

        <button className="mb-4 mt-2 border-2 border-solid border-white bg-transparent px-7 py-2 font-Lora text-sm uppercase text-white md:mb-8 md:px-10 md:text-lg">
          explore &rarr;
        </button>
      </div>

      <div className="mx-2 flex w-full justify-between border-2 border-solid border-[#e1b485] pl-12 md:mx-0 md:w-[95%] md:pb-6 md:pl-10  md:pr-2 md:pt-6">
        <ul className="flex flex-col items-center justify-between md:flex-row">
          <MainList
            listText={
              "Enjoy practicably the best photography practice in the country"
            }
          />
          <MainList
            listText={
              "Enjoy practicably the best photography practice in the country"
            }
          />
          <MainList
            listText={
              "Enjoy practicably the best photography practice in the country"
            }
          />
          <MainList
            listText={
              "Enjoy practicably the best photography practice in the country"
            }
          />
        </ul>
      </div>
    </main>
  );
};

const MainList = ({ listText }) => {
  return (
    <li className="my-1 list-outside list-image-LeftArrowList text-sm xl:mx-2 xl:text-lg">
      {listText}
    </li>
  );
};

export default Main;
