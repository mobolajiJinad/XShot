import Photo5 from "../../assets/Photo5.png";
import Photo6 from "../../assets/Photo6.png";
import Photo7 from "../../assets/Photo7.png";

const TopExperiences = () => {
  const photoImages = [
    { img: Photo5, textH3: "red pyramids", textH4: "russel james" },
    { img: Photo6, textH3: "red pyramids", textH4: "russel james" },
    { img: Photo7, textH3: "red pyramids", textH4: "russel james" },
  ];

  return (
    <section>
      <div>
        <h2 className="text-center text-xl uppercase md:text-5xl">
          With our top <span className="text-[#002a34]">experiences</span>
        </h2>
        <p className="whitespace-pre-wrap p-2 text-center text-sm md:text-xl lg:px-4">
          Meet with our top experienced photographer and see some of our top
          projects and make sure everything you enjoy is seamless and amazing.
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-around sm:flex-row">
        {photoImages.map((photo, index) => (
          <Photo
            imgSrc={photo.img}
            textH3={photo.textH3}
            textH4={photo.textH4}
            key={index}
          />
        ))}
      </div>

      <button className="mb-8 ml-auto mr-8 mt-4 block rounded-md border-2 border-solid border-black bg-transparent px-10 py-2 font-serif uppercase text-[#002a34] md:px-12 md:py-4">
        view all &rarr;
      </button>
    </section>
  );
};

const Photo = ({ imgSrc, textH3, textH4 }) => {
  return (
    <div className="relative mb-2 w-full px-2 sm:w-[32%] md:mb-0 md:px-0">
      <img className="w-full" src={imgSrc} alt="Image" />

      <div className="absolute inset-x-0 bottom-3 whitespace-nowrap text-center">
        <h3 className="font-RuslanDisplay text-3xl uppercase">{textH3}</h3>
        <h4 className="text-2xl capitalize">{textH4}</h4>
      </div>
    </div>
  );
};

export default TopExperiences;
