import { Helmet } from "react-helmet";

const Main = () => {
  return (
    <>
      <Helmet>
        <title>XShot - Contacts</title>
      </Helmet>

      <main>
        <div className="h-[75vh] w-full bg-ContactMainTop bg-cover bg-no-repeat p-12 text-center md:h-[70vh]">
          <span className="mx-auto my-11 block font-LuxuriousScript text-4xl">
            glitz and glamour at its peak
          </span>
          <h1 className="font-MacondoSwashCaps text-5xl capitalize">
            contact us
          </h1>
        </div>

        <div className="flex w-full flex-col items-center justify-around bg-[#e1b4854d] px-0 py-12 md:flex-row">
          <Child
            title={"location"}
            marker={"fa-map-marker-alt"}
            text={
              "Densel washington street, inufele streets Densel washington street, inufele streets"
            }
          />

          <div className="mx-auto h-[2px] w-[90%] bg-[#002a3480] md:h-40 md:w-[2px]"></div>

          <Child
            title={"about us"}
            marker={"fa-envelope"}
            text={
              "Densel washington street, inufele streets Densel washington street, inufele streets"
            }
          />

          <div className="mx-auto h-[2px] w-[90%] bg-[#002a3480] md:h-40 md:w-[2px]"></div>

          <Child
            title={"about us"}
            marker={"fa-heart"}
            text={
              "Densel washington street, inufele streets Densel washington street, inufele streets"
            }
          />
        </div>
      </main>
    </>
  );
};

const Child = ({ title, text, marker }) => {
  return (
    <div className="my-4 flex flex-col items-center text-[#002a34]">
      <div class={`fas ${marker} text-2xl text-[#002a34]`}></div>
      <h4 className="mx-0 my-4 text-center text-2xl capitalize text-[#002a34]">
        {title}
      </h4>
      <p className="text-center text-base text-[#002a34]">{text}</p>
    </div>
  );
};

export default Main;
