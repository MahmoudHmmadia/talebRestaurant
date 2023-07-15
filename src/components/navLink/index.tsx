import { motion as m } from "framer-motion";
import "./navLink.scss";
import { useNavLink } from "../../hooks/useNavLink";
import { NavLink } from "react-router-dom";
type props = {
  content: string;
  href: string;
  hoverColor: string;
  color?: string;
};

function Link({ content, href, hoverColor, color }: props) {
  const { activeCheck } = useNavLink();
  return (
    <m.li
      className={`uppercase bold fs-small flex flex-column w-fit g-2 align-center relative nav_link z_1 ${color} ${
        content == "home" && "active"
      }`}
      onClick={activeCheck}
      whileHover={{
        color: hoverColor,
      }}
    >
      {href == "team" ? (
        <NavLink className={`${color} letter-s-2 pointer nav-link`} to={href}>
          {content}
        </NavLink>
      ) : (
        <m.a href={`#${href}`} className={`${color} letter-s-2`}>
          {content}
        </m.a>
      )}

      <div
        className="absolute w-100 chape"
        style={{
          bottom: "-8px",
        }}
      >
        <div
          className="absolute khaled-bg chape_line w-100 opacity-0 z_1"
          style={{
            height: "1px",
            transform: "scaleX(.2)",
          }}
        ></div>
        <div
          className="absolute khaled-bg chape_line w-100 opacity-0 z_1"
          style={{
            height: "1px",
            bottom: "-5px",
            transform: "scaleX(.2)",
          }}
        ></div>
      </div>
    </m.li>
  );
}
export default Link;
