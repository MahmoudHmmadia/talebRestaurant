import Home from "../Home";
import About from "../about";
import Footer from "../footer/Footer";
import MakeYourOwnFood from "../makeYourOwnFood";
import Services from "../services";
import OurStrength from "../strength";
import RateUs from "../rate";
import { UseContext } from "../../context/UseContext";
import Link from "../../components/navLink";
import logo from "../../assets/logo.png";
import { IoCloseCircle } from "react-icons/io5";
import { motion as m } from "framer-motion";
import ServerResponse from "../../components/serverResponse";
import { useEffect, useState } from "react";
import Loading from "../loading";
import image from "../../assets/rate.svg";
import { Helmet } from "react-helmet";
import Popular from "../popular";
function Welcome() {
  const { toggle, setToggle, serverResponse } = UseContext();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      <Helmet>
        <link rel="icon" href={logo} />
        <title>Taleb Restaurant | Home</title>
      </Helmet>
      {isLoading && <Loading />}
      {toggle && (
        <>
          <div className="fixed mob-overlay z_-1 t-0 l-0 w-100 h-100 z-100000 alt-bg opacity-90"></div>
          <m.ul
            className="mob-links flex flex-column dark-box-shadow g-3 p-3 alt-bg radius-s fixed align-center r-0 t-0 h-100 justify-center"
            style={{
              minWidth: "50%",
              zIndex: 100000000000,
            }}
            initial={{
              x: 200,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
          >
            <div className="absolute l-0 t-0 w-100 h-100 z_-1 centering-content">
              <img src={image} alt="RATE" />
            </div>
            <div className="absolute mob-overlay t-0 l-0 w-100 h-100 alt-bg opacity-80 z_-1"></div>
            <div
              className="absolute r-0 t-0 cl-r fs-med pointer"
              onClick={() => setToggle(false)}
            >
              <IoCloseCircle />
            </div>
            <div
              className="absolute t-0 l-50"
              style={{
                transform: "translateX(-50%)",
                top: "10%",
              }}
            >
              <img src={logo} width={80} alt="LOGO" />
            </div>
            <div
              className="line w-100 khaled-bg absolute l-0"
              style={{
                height: "1px",
                top: "25%",
              }}
            ></div>
            <Link content="services" href="services" hoverColor="#e4c590" />
            <Link content="about us" href="about-us" hoverColor="#e4c590" />
            <Link
              content="make your food"
              href="make-your-food"
              hoverColor="#e4c590"
            />
            <Link content="our team" href="team" hoverColor="#e4c590" />
            <Link content="popular" href="popular" hoverColor="#e4c590" />
          </m.ul>
        </>
      )}
      {serverResponse && (
        <>
          <div className="fixed l-0 t-0 w-100 h-100 black-bg opacity-70 z-100000"></div>
          <ServerResponse response={serverResponse} />
        </>
      )}
      <>
        <Home />
        <Services />
        <MakeYourOwnFood />
        <About />
        <Popular />
        <OurStrength />
        <RateUs />
        <Footer />
      </>
    </>
  );
}
export default Welcome;
