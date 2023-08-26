import { GiKitchenKnives } from "react-icons/gi";
import "./button.scss";
import { motion as m } from "framer-motion";
import { IconType } from "react-icons";
import { UseContext } from "../../context/UseContext";
type props = {
  content: string;
  bgColor?: string;
  color?: string;
  altColor?: string;
  outline: string;
  button_circle_bg_color?: string;
  animate?: boolean;
  clickFunction?: () => void;
  valid?: boolean;
  Icon: IconType;
};

function Button({
  content,
  button_circle_bg_color,
  bgColor,
  outline,
  color,
  altColor,
  animate,
  clickFunction,
  Icon,
  valid,
}: props) {
  const { loader } = UseContext();
  return (
    <m.button
      className={`button pl-3 pr-3 pt-2 pb-2 relative bold  letter-s-2 uppercase centering-content relative overflow-hidden ${
        !valid ? "opacity-50 mouse-none" : "pointer opacity-100"
      } ${outline} ${bgColor} ${color}`}
      style={{}}
      initial={{
        y: animate ? "30%" : "",
        opacity: animate ? 0 : "",
      }}
      animate={{
        y: animate ? "0%" : "",
        opacity: animate ? 1 : "",
      }}
      transition={{
        duration: 0.5,
        delay: 2,
      }}
      onClick={clickFunction}
      disabled={loader}
    >
      <div
        className={`absolute button_circle smooth-2 l-50 circle flex g-1 align-center ${button_circle_bg_color}`}
        style={{
          width: "200%",
          height: "200%",
          top: "-200%",
        }}
      ></div>
      <p className="">{content}</p>
      <span className={`flex ${color} fs-med`}>
        <GiKitchenKnives />
      </span>
      <div
        className={`absolute cool_text smooth-2 w-100 flex align-center g-1 ${altColor}`}
        style={{
          top: "150%",
          left: "50%",
          transform: "translate(-38%,-50%)",
        }}
      >
        <span>{content}</span>
        <span className={`flex ${altColor} fs-med`}>
          <Icon />
        </span>
      </div>
    </m.button>
  );
}
export default Button;
