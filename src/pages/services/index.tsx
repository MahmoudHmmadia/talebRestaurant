import SectionTitle from "../../components/sectionTitle";
import firstShape from "../../assets/services_shape_1.png";
import secondShape from "../../assets/services_shape_2.png";
import ServiceBox from "./components/serviceBox";
import ServiceBoxImageI from "../../assets/service-1.jpg";
import ServiceBoxImageII from "../../assets/service-2.jpg";
import ServiceBoxImageIII from "../../assets/service-3.jpg";
import { motion as m } from "framer-motion";
import "./services.scss";
import { useNavigate } from "react-router-dom";
import { UseContext } from "../../context/UseContext";
function Services() {
  const { setCat } = UseContext();
  const navigate = useNavigate();
  function drinks() {
    setCat("drinks");
    navigate("menu");
  }
  function breakfast() {
    setCat("breakFast");
    navigate("menu");
  }
  function meal() {
    setCat("meal");
    navigate("menu");
  }
  return (
    <div
      className="section services overflow-hidden relative alt-bg"
      id="services"
    >
      <m.div
        className="image absolute l-0 b-0"
        initial={{
          bottom: 0,
        }}
        animate={{
          bottom: "-10%",
        }}
        transition={{
          duration: 4,
          repeatType: "mirror",
          repeat: Infinity,
        }}
      >
        <img src={firstShape} alt="SHAPE" />
      </m.div>
      <m.div
        className="image absolute r-0 t-0"
        initial={{
          top: 0,
        }}
        animate={{
          top: "-10%",
        }}
        transition={{
          duration: 4,
          repeatType: "mirror",
          repeat: Infinity,
        }}
      >
        <img src={secondShape} alt="SHAPE" />
      </m.div>
      <div className="container centering-content flex-column g-3 relative">
        <SectionTitle title="FLAVORS FOR ROYALTY" animate={false} />
        <div className="flex flex-column g-3 align-center w-100">
          <div className="flex flex-column g-1 w-100 align-center">
            <h1 className="cool_title">We Offer Top Notch</h1>
            <p className="w-40 txt-c line-h-2 letter-s-1 services_info">
              Indulge in a sophisticated royal dining experience at our
              restaurant. We believe that every dish should be a masterpiece
              that captivates the taste buds and leaves a lasting impression.
              Our menu is carefully crafted with exquisite flavors and the
              finest ingredients, ensuring an unforgettable royal experience.
            </p>
          </div>
          <div className="services_boxes flex justify-between flex-wrap g-3 w-100">
            <ServiceBox
              title="Breakfast"
              img={ServiceBoxImageI}
              y="top"
              clickFunction={breakfast}
            />
            <ServiceBox
              title="Meal"
              img={ServiceBoxImageII}
              y="bottom"
              clickFunction={meal}
            />
            <ServiceBox
              title="Drinks"
              img={ServiceBoxImageIII}
              y="top"
              clickFunction={drinks}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
