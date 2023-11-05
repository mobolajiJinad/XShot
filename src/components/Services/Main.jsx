import { useState } from "react";

import servicesRight from "../../assets/servicesRight.png";
import servicesRightBG from "../../assets/servicesRightBG.png";
import upLoadImg from "../../assets/upload.png";

const countries = [
  "Type your location",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Argentina",
  "Australia",
  "Brazil",
  "Canada",
  "China",
  "Egypt",
  "France",
  "Germany",
  "Greece",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Italy",
  "Japan",
  "Mexico",
  "Netherlands",
  "Nigeria",
  "Pakistan",
  "Peru",
  "Russia",
  "Saudi Arabia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Chile",
  "Colombia",
  "Malaysia",
  "Philippines",
  "Singapore",
  "New Zealand",
  "Israel",
  "Belgium",
  "Portugal",
];

const Main = () => {
  const [data, setData] = useState({
    name: "",
    location: "",
    description: "",
    category: "",
  });

  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <main className="flex flex-wrap justify-between pb-3">
      <div className="mx-auto w-[85%] sm:w-1/2">
        <h1 className="mx-0 mb-7 mt-8 text-center text-3xl sm:text-4xl">
          Let's help you reach your{" "}
          <span className="block font-MacondoSwashCaps text-4xl text-[#e1b485] sm:text-5xl">
            audience
          </span>
        </h1>

        <div className="relative h-[25rem] w-full text-center sm:h-[27rem]">
          <img
            className="absolute inset-0 right-5 top-3 mx-auto my-0 block max-h-96 w-full sm:w-5/6"
            src={servicesRightBG}
            alt="Image BG"
          />
          <img
            className="absolute inset-0 mx-auto my-0 block max-h-96 w-full sm:w-5/6"
            src={servicesRight}
            alt="An image"
          />
        </div>
      </div>

      <form className="mx-2 w-full bg-[#1f2223] px-4 py-3 sm:mx-0 sm:w-1/2">
        <label
          className="mb-2 mt-4 block text-base capitalize text-[#e1b485]"
          htmlFor="name"
        >
          name
        </label>
        <input
          className="mb-2 w-[95%] cursor-pointer rounded-md border border-solid border-[#e1b485] bg-[#002a34] p-3 text-lg text-[#e1b48580] sm:text-xl"
          type="text"
          id="name"
          value={data.name}
          onChange={handleInputChange}
          name="name"
          placeholder="Type your name"
        />

        <label
          className="mb-2 mt-4 block text-base capitalize text-[#e1b485]"
          htmlFor="location"
        >
          location
        </label>
        <input
          className="mb-2 w-[95%] cursor-pointer rounded-md border border-solid border-[#e1b485] bg-[#002a34] p-3 text-lg text-[#e1b48580] sm:text-xl"
          type="text"
          value={data.location}
          onChange={handleInputChange}
          id="location"
          name="location"
          placeholder="Type your location"
        />

        <label
          className="mb-2 mt-4 block text-base capitalize text-[#e1b485]"
          htmlFor="description"
        >
          description
        </label>
        <textarea
          className="mb-2 w-[95%] cursor-pointer rounded-md border border-solid border-[#e1b485] bg-[#002a34] p-3 text-lg text-[#e1b48580] sm:text-xl"
          id="description"
          cols="30"
          rows="10"
          placeholder="Enter a short description here"
          value={data.description}
          name="description"
          onChange={handleInputChange}
        ></textarea>

        <label
          className="mb-2 mt-4 block text-base capitalize text-[#e1b485]"
          htmlFor="categoryInput"
        >
          category
        </label>
        <select
          className="mb-2 w-[95%] cursor-pointer rounded-md border border-solid border-[#e1b485] bg-[#002a34] p-3 text-lg text-[#e1b48580] sm:text-xl"
          id="categoryInput"
          name="category"
          value={data.category}
          onChange={handleInputChange}
        >
          {countries.map((country, index) => (
            <option className="px-3" key={index}>
              {country}
            </option>
          ))}
        </select>

        <label
          className="mb-2 mt-4 inline-block h-36 w-[95%] cursor-pointer rounded-lg border border-solid border-[#e1b485] bg-[#002a34] px-3 py-2 text-base capitalize text-[#e1b485]"
          htmlFor="categorySelect"
        >
          <img className="m-auto block" src={upLoadImg} alt="upload image" />
          <input
            className="mb-2 hidden w-[95%] cursor-pointer rounded-md border border-solid border-[#e1b485] bg-[#002a34] p-3 text-lg text-[#e1b48580] sm:text-xl"
            type="file"
            id="categorySelect"
          />
          <span className="block text-center text-[#e1b48580]">
            Upload JPG or PNG
          </span>
        </label>

        <input
          className="mb-2 w-[95%] cursor-pointer rounded-md border border-solid border-[#e1b485] bg-[#002a34] p-3 text-lg text-[#e1b48580] sm:text-xl"
          type="submit"
          value="Submit"
        />
      </form>
    </main>
  );
};
export default Main;
