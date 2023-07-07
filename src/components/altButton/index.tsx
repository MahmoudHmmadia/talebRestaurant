import { motion as m } from "framer-motion";
import { IconType } from "react-icons";
import "./alt-button.scss";
type props = {
  content: string;
  color: string;
  bgColor: string;
  Icon?: IconType;
  fn?: () => void;
  width?: string;
  valid?: boolean;
  border?: boolean;
};
function AltButton({
  content,
  bgColor,
  color,
  fn,
  Icon,
  width,
  valid,
  border,
}: props) {
  return (
    <m.button
      className={`p-2 bold uppercase letter-s-1 m-auto centering-content g-1 alt-button ${bgColor} ${color} ${
        width ? width : "w-60"
      } ${valid ? "pointer opacity-100" : "mouse-none opacity-50"}`}
      onClick={fn}
      whileHover={{
        scale: 0.9,
      }}
      style={{
        border: border ? "1px solid" : "",
      }}
    >
      <span>{content}</span>
      {Icon && (
        <span className="fs-med flex">
          <Icon />
        </span>
      )}
    </m.button>
  );
}
export default AltButton;
