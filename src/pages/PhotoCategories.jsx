import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Main from "../components/PhotoCategories/Main";
import CategoryContainers from "../components/PhotoCategories/CategoryContainers";

const PhotoCategories = () => {
  return (
    <>
      <Helmet>
        <title>XShot - Photo Categories</title>
        {`
          body {
            margin: auto;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, #002a34 67.71%);

            background-size: cover;
            background-attachment: fixed;
          }
        `}
      </Helmet>

      <Header bgColor={"#906f4d"} xColor={"#002a34"} shotColor={"#002a34"} />
      <Main />
      <CategoryContainers />
    </>
  );
};
export default PhotoCategories;
