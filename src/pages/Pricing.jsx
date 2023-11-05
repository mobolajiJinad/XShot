import { Helmet } from "react-helmet"
import Header from "../components/Header"
import Main from "../components/Pricing/Main"

const Pricing = () => {
  return (
  <>
    <Helmet>
        <title>XShot - Pricing</title>
        <style>
          {`
            *{
              color:black;
            }

            body {
              margin: auto;
            }
          `}
        </style> 
    </Helmet>

    <Header bgColor={"#906f4d"} xColor={"#002a34"} shotColor={"#b2917f"} />
    <Main/>
    </>
  )
}

export default Pricing