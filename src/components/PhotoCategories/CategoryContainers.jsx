import Photo10 from "../../assets/Photo10.png";
import Photo11 from "../../assets/Photo11.png";
import Photo12 from "../../assets/Photo12.png";
import Photo13 from "../../assets/Photo13.png";
import Photo14 from "../../assets/Photo14.png";
import Photo15 from "../../assets/Photo15.png";

const CategoryContainers = () => {
  return (
    <section>
      <Container
        bgColor={"whiteBG"}
        imgSrc={Photo10}
        title={"wildlife photography"}
        text={
          "Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft pictures that can inspire you in different ways that will improve your skill and craft Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft"
        }
      />

      <Container
        bgColor={"brownBG"}
        imgSrc={Photo11}
        title={"wildlife photography"}
        text={
          "Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft pictures that can inspire you in different ways that will improve your skill and craft Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft"
        }
      />

      <Container
        bgColor={"whiteBG"}
        imgSrc={Photo12}
        title={"wildlife photography"}
        text={
          "Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft pictures that can inspire you in different ways that will improve your skill and craft Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft"
        }
      />

      <Container
        bgColor={"brownBG"}
        imgSrc={Photo13}
        title={"wildlife photography"}
        text={
          "Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft pictures that can inspire you in different ways that will improve your skill and craft Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft"
        }
      />

      <Container
        bgColor={"whiteBG"}
        imgSrc={Photo14}
        title={"wildlife photography"}
        text={
          "Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft pictures that can inspire you in different ways that will improve your skill and craft Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft"
        }
      />

      <Container
        bgColor={"brownBG"}
        imgSrc={Photo15}
        title={"wildlife photography"}
        text={
          "Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft pictures that can inspire you in different ways that will improve your skill and craft Here you are allowed to see and explore and the diverse category of different wildlife pictures that can inspire you in different ways that will improve your skill and craft"
        }
      />
    </section>
  );
};

const Container = ({ bgColor, imgSrc, title, text }) => {
  return (
    <div
      className={`${
        bgColor === "whiteBG" ? "bg-[#efefef]" : "bg-[#e1b485]"
      } flex w-full flex-wrap items-center justify-around px-2 py-7`}
    >
      <img
        src={imgSrc}
        alt="An image"
        className={`${
          bgColor === "whiteBG" ? "md:order-first" : "sm:order-1"
        } w-[70%] sm:w-1/2 md:w-[35%]`}
      />

      <div className="w-full px-4 sm:w-1/2 md:w-[60%]">
        <h3 className="mx-0 my-3 border-b border-solid border-b-[#002a34] text-center font-RuslanDisplay text-xl text-[#002a34] sm:text-2xl md:text-4xl">
          {title}
        </h3>

        <p className="mx-1 my-4 w-full text-center text-xs text-[#002a34] md:mx-7 md:text-sm">
          {text}
        </p>

        <button
          className={`m-auto block cursor-pointer rounded-md px-7 py-2 font-Lora uppercase ${
            bgColor === "whiteBG"
              ? "border border-solid border-[#e1b485] bg-[#e1b485] text-[#002a34]"
              : "border border-solid border-[#002a34] bg-[#002a34] text-[#e1b485]"
          }`}
        >
          check all
        </button>
      </div>
    </div>
  );
};

export default CategoryContainers;
