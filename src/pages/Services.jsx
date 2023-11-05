import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Main from "../components/Services/Main";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>XShot - Services</title>
        <style>
          {`
            body {
              margin: auto;
              background:#002a34ce;
              background-size: cover;
              background-attachment: fixed;
            }
          `}
        </style>
      </Helmet>

      <Header bgColor={"#906f4d"} xColor={"#e1b485"} shotColor={"#b2917f"} />
      <Main />
    </>
  );
};

export default Services;
