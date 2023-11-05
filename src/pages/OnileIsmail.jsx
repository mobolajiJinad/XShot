import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Main from "../components/OnileIsmail/main";

const OnileIsmail = () => {
  return (
    <>
      <Helmet>
        <title>XShot - OnileIsmail Showcase page</title>

        <style>
          {` 
            body {
              min-width: 1150px;
              margin: auto;
              background: linear-gradient(180deg, #e1b485 0%, #002a34 50.52%);
              background-size: cover;
              background-attachment: fixed;
            }
          `}
        </style>
      </Helmet>

      <Header bgColor={"#906f4d"} xColor={"#002a34"} shotColor={"#002a34"} />
      <Main />
    </>
  );
};

export default OnileIsmail;
