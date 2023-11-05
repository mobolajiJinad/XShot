import allPhotoMain from "../../assets/allPhotoMain.png";

const Main = () => {
  return (
    <main
      style={{
        background:
          "linear-gradient(275.14deg, rgba(217, 217, 217, 0) 16.9%, rgba(0, 0, 0, 0.72) 69.13%);",
      }}
    >
      <h1 className="p-8 text-center text-2xl font-bold capitalize text-[#52300963] sm:text-5xl">
        all photo categories
      </h1>

      <div className="flex flex-wrap-reverse items-center justify-between pb-2">
        <div className="w-full sm:h-full sm:w-1/2">
          <CategoryContainer
            title={"Emotional and Cinematic Storytelling"}
            text={
              "Here this is what we create , a moody and ambient environment for you to enjoy your solid moment"
            }
          />

          <CategoryContainer
            title={"Emotional and Cinematic Storytelling"}
            text={
              "Here this is what we create , a moody and ambient environment for you to enjoy your solid moment"
            }
          />

          <button className="mx-auto my-0 block w-40 border-2 border-solid border-[#e1b485] bg-transparent px-4 py-1 uppercase text-[#e1b485]">
            read more
          </button>
        </div>

        <img
          className="h-full w-full sm:max-w-[50%]"
          src={allPhotoMain}
          alt="Main Image"
        />
      </div>
    </main>
  );
};

const CategoryContainer = ({ title, text }) => {
  return (
    <div className="mx-auto mb-10 px-8 py-0 text-center">
      <h4 className="pb-3 text-base font-bold text-[#e1b485]">{title}</h4>

      <p className="text-sm">{text}</p>
    </div>
  );
};

export default Main;
