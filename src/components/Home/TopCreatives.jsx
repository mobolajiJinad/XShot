import { Link } from "react-router-dom";

import Photo8 from "../../assets/Photo8.png";
import Photo9 from "../../assets/Photo9.png";

const TopCreatives = () => {
  return (
    <section>
      <div className="m-4 text-center text-xl">
        <h2 className="mb-3 text-xl capitalize md:text-3xl">
          top <span>photography creatives</span>
        </h2>
        <p>Meet our creatives for your editing</p>
      </div>

      <div className="flex flex-col items-center justify-around md:flex-row">
        <PhotoCreatives
          imgSrc={Photo8}
          name={"Onile Ismail"}
          clientNum={24}
          rating={5}
          paragraphText={
            "Good client interaction can absolutely speak every language and also do and undo"
          }
          href={"/showcase/onileIsmail"}
        />

        <PhotoCreatives
          imgSrc={Photo9}
          name={"Envia Christain"}
          clientNum={32}
          rating={4.5}
          paragraphText={
            "Good client interaction can absolutely speak every language and also do and undo"
          }
          href={"/showcase/onileIsmail"}
        />
      </div>
    </section>
  );
};

const PhotoCreatives = ({
  imgSrc,
  name,
  clientNum,
  rating,
  paragraphText,
  href,
}) => {
  return (
    <div className="relative mx-auto mb-2 min-h-[250px] w-[95%] rounded-xl md:w-[48%] lg:w-[45%]">
      <img className="h-full w-full" src={imgSrc} alt="An image" />

      <div className="absolute inset-0 mx-auto flex h-full w-5/6 flex-col justify-center text-center">
        <h2 className="mt-1 font-RuslanDisplay text-2xl lg:text-4xl">{name}</h2>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-lg text-[#fefefe] lg:text-xl">
            {clientNum} clients
          </span>
          <span className="text-lg text-[#fefefe] lg:text-xl">
            {rating} star rating
          </span>
        </div>

        <p className="my-2 text-sm text-[#fefefe] lg:text-base xl:text-lg">
          {paragraphText}
        </p>

        <Link
          to={href}
          className="mx-auto mt-4 cursor-pointer rounded-lg border border-solid border-[#002a34] bg-transparent px-5 py-2 text-lg text-[#fefefe] lg:px-7"
          href="./html/onileIsmail_showcase_page.html"
        >
          Check out his works &rarr;
        </Link>
      </div>
    </div>
  );
};

export default TopCreatives;
