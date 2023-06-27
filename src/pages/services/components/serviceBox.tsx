import { HiArrowRight } from "react-icons/hi";
import pattern from "../../../assets/pattern.svg";
import { motion as m } from "framer-motion";
type props = {
  img: string;
  title: string;
  y: string;
  clickFunction: () => void;
};

function ServiceBox({ img, title, y, clickFunction }: props) {
  return (
    <div
      className={`service_box flex flex-column align-center g-2 relative overflow-hidden pb-2`}
      style={{
        transform: `translateY(${y === "top" ? "-5rem" : "3rem"})`,
      }}
    >
      <div className="pt-3 pb-3 shine relative">
        <div className="image absolute pattern l-50 h-100 z_-1 smooth-4">
          <img src={pattern} alt="Pattern" />
        </div>
        <div className="image mb-3">
          <img src={img} alt="IMAGE" className="smooth-5 service_image" />
        </div>
      </div>
      <h1 className="cool_title">{title}</h1>
      <m.button
        className="p-2 uppercase bold fs-x-small khaled-bg cl-b letter-s-1 radius-s centering-content g-1"
        whileHover={{
          scale: 0.95,
          backgroundColor: "#000",
          color: "#e4c590",
        }}
        onClick={clickFunction}
      >
        <span>View In Menu</span>
        <m.span
          className="icon flex"
          initial={{
            x: 0,
          }}
          animate={{
            x: 8,
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear",
          }}
        >
          <HiArrowRight />
        </m.span>
      </m.button>
    </div>
  );
}
export default ServiceBox;
