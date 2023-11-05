import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Main from "../components/Home/Main";
import PhotoContainer from "../components/Home/PhotoContainer";
import TopPick from "../components/Home/TopPick";
import TopExperiences from "../components/Home/TopExperiences";
import TopCreatives from "../components/Home/TopCreatives";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>XShot Landing Page</title>
        <style>
          {`
            body {
              margin: auto;
              background: linear-gradient(
                180deg,
                #000000 0%,
                #002a34 20%,
                #e1b485 45%,
                #b2917f 70%,
                #002a34 100%
              );
              background-size: cover;
              background-attachment: fixed;
            }
          `}
        </style>
      </Helmet>

      <Header bgColor={"#002a34"} xColor={"#e1b485"} shotColor={"#e1b485"} />
      <Main />
      <PhotoContainer />
      <TopExperiences />
      <TopCreatives />
      <TopPick />
      <Footer />
    </>
  );
};

export default Home;
