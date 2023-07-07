import Link from "../../components/navLink";
import logo from "../../assets/logo.png";
import pattern from "../../assets/footer-form-pattern.svg";
import "./footer.scss";
import { motion as m } from "framer-motion";
import Button from "../../components/button";
import { useState } from "react";
import Subscribe from "./components/Subscribe";
import { BsCheck } from "react-icons/bs";

function Footer() {
  const [isSubscribe, setIsSubscribe] = useState(false);
  return (
    <footer className="section footer relative">
      {isSubscribe && <Subscribe setIsSubscribe={setIsSubscribe} />}
      <div className="container relative h-100 g-3 align-center">
        <ul className="flex flex-column g-3 mr-2 align-center">
          <Link content="home" hoverColor="#e4c590" href="home" color="cl-t2" />
          <Link
            content="services"
            hoverColor="#e4c590"
            href="services"
            color="cl-t2"
          />
          <Link
            content="popular"
            hoverColor="#e4c590"
            href="popular"
            color="cl-t2"
          />
        </ul>
        <div className="flex align-center flex-column g-3 p-3 relative overflow-hidden brand">
          <div className="pattern absolute l-0 t-0 h-100">
            <img src={pattern} alt="PATTERN" width={15} />
          </div>
          <div className="pattern absolute r-0 t-0 h-100">
            <img src={pattern} alt="PATTERN" width={15} />
          </div>
          <div className="logo">
            <img src={logo} alt="LOGO" width={100} />
          </div>
          <p className="cl-t2">Khaled Restaurant , Damascus City, Hamk</p>
          <m.a
            href=""
            className="cl-t2"
            whileHover={{
              color: "#e4c590",
            }}
          >
            Khaled@gmail.com
          </m.a>
          <m.a
            href=""
            className="cl-t2"
            whileHover={{
              color: "#e4c590",
            }}
          >
            Booking Request : +88-123-123456
          </m.a>
          <p className="cl-t2">Open : 12:00 am - 00:00 pm</p>
          <div className="m-t2 flex flex-column g-1 align-center">
            <h4
              className="cool_title"
              style={{
                fontSize: "2.5rem",
              }}
            >
              Get News & Offers
            </h4>
            <p className="cl-t2">Subscribe us & Get 25% Off.</p>
          </div>
          <div className="subscribe flex w-90 justify-center">
            <Button
              content="Subscribe"
              outline=""
              altColor="cl-w"
              bgColor="khaled-bg"
              button_circle_bg_color="black-bg"
              color="cl-b"
              valid={true}
              clickFunction={() => setIsSubscribe(true)}
              Icon={BsCheck}
            />
          </div>
        </div>
        <ul className="flex flex-column g-3 ml-2 align-center">
          <Link
            content="make your food"
            hoverColor="#e4c590"
            href="make-your-food"
            color="cl-t2"
          />
          <Link
            content="our team"
            hoverColor="#e4c590"
            href="team"
            color="cl-t2"
          />
          <Link
            content="about us"
            hoverColor="#e4c590"
            href="about-us"
            color="cl-t2"
          />
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
