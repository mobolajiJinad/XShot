import { Link } from "react-router-dom";
import LeftArrowList from "../../assets/LeftArrowList.png";
import Photo1 from "../../assets/Photo1.jpg";
import Photo2 from "../../assets/Photo2.jpg";
import Photo3 from "../../assets/Photo3.jpg";
import Photo4 from "../../assets/Photo4.jpg";

const PhotoContainer = () => {
  const photoImages = [
    { img: Photo1, text: "wildlife" },
    { img: Photo2, text: "sport" },
    { img: Photo3, text: "landscape" },
    { img: Photo4, text: "portrait" },
  ];

  return (
    <section className="mx-0 my-4 md:my-8">
      <div className="flex items-center justify-between p-3 text-center">
        <div className="flex-grow text-center text-base uppercase">
          <h3 className="text-center text-lg">top photo classes</h3>

          <h2 className="mx-0 my-4 text-base font-bold md:text-4xl">
            view all photo category
          </h2>
        </div>

        <Link to="/categories">
          <img src={LeftArrowList} className="w-7 md:w-9" />
        </Link>
      </div>

      <div className="md:min-h-96 flex h-auto w-full flex-wrap items-center justify-around ">
        {photoImages.map((photo, index) => (
          <Photo photoImg={photo.img} photoText={photo.text} key={index} />
        ))}
      </div>

      <div className="mx-auto my-8 h-1 w-5/6 bg-[#e1b485]"></div>
    </section>
  );
};

const Photo = ({ photoImg, photoText }) => {
  return (
    <div className="relative my-1 h-96 w-full px-1 hover:scale-105 sm:w-1/2 lg:w-1/4">
      <img
        src={photoImg}
        alt="Image showcase"
        className="h-full w-full rounded-xl"
      />
      <p className="absolute bottom-1 left-3 font-LuckiestGuy text-3xl uppercase text-[#e1b485]">
        {photoText}
      </p>
    </div>
  );
};

export default PhotoContainer;
