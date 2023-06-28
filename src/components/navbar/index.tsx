import logo from "../../assets/logo.png";
import Button from "../button";
import Link from "../navLink";
import { SlCalender } from "react-icons/sl";
import { CiBurger } from "react-icons/ci";
import "./navbar.scss";
import { UseContext } from "../../context/UseContext";
function Navbar() {
  const { setReservation, setToggle } = UseContext();
  return (
    <nav
      className="nav flex justify-between align-center pt-2 pb-2 g-1 relative"
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div className="logo">
        <img src={logo} alt="LOGO" width={80} />
      </div>
      <ul className="links flex align-center justify-center g-3 flex-1 justify-center">
        <Link content="services" href="services" hoverColor="#e4c590" />
        <Link content="about us" href="about-us" hoverColor="#e4c590" />
        <Link
          content="make your food"
          href="make-your-food"
          hoverColor="#e4c590"
        />
        <Link content="our tram" href="team" hoverColor="#e4c590" />
        <Link content="popular" href="popular" hoverColor="#e4c590" />
      </ul>
      <Button
        content="FIND A TABLE"
        bgColor="khaled-bg"
        outline=""
        altColor="cl-khaled"
        button_circle_bg_color="black-bg"
        clickFunction={() => setReservation(true)}
        valid={true}
        Icon={SlCalender}
      />
      <div
        className="burger d-none cl-khaled fs-large pointer"
        onClick={() => setToggle(true)}
      >
        <CiBurger />
      </div>
    </nav>
  );
}
export default Navbar;
