import SectionTitle from "../../components/sectionTitle";
import mainAboutImage from "../../assets/about-banner.jpg";
import altAboutImage from "../../assets/about-abs-image.jpg";
import pattern from "../../assets/pattern.svg";
import shape from "../../assets/about_shape.png";
import "./about.scss";
import AltButton from "../../components/altButton";
import { useNavigate } from "react-router-dom";
function About() {
  const navigate = useNavigate();
  return (
    <div className="section about relative" id="about-us">
      <div className="shape absolute l-0 t-50 opacity-70">
        <img src={shape} alt="" />
      </div>
      <div className="container flex align-center justify-between g-3 flex-wrap relative">
        <div className="about_content flex flex-column g-3 align-center w-30">
          <SectionTitle title="OUR STORY" />
          <div className="cool_title txt-c">Every Fla vor Tells a Story</div>
          <div className="cool_content txt-c">
            At our restaurant, every flavor tells a unique story. We strive to
            provide an unforgettable dining experience that inspires our guests
            to create new memories. We value exceptional dishes and local
            ingredients, and we aim to create a welcoming and comfortable
            atmosphere that fosters a sense of belonging. We listen to our
            guests' feedback and continuously seek improvement. Discover
            flavors, indulge in an inspiring culinary journey, and savor new
            experiences that will create unforgettable memories.
          </div>
          <h3>Book Through Call</h3>
          <h2 className="cl-khaled">+963 967 967 967</h2>
          <div className="flex g-1 fs-small w-100">
            <AltButton
              bgColor="khaled-bg"
              color="cl-b"
              content="popular dishes"
              valid={true}
              fn={() => navigate("/popular")}
            />
            <AltButton
              bgColor="black-bg"
              color="cl-khaled"
              content="our team"
              valid={true}
              border={true}
              fn={() => navigate("/team")}
            />
          </div>
        </div>
        <div className="about_images relative">
          <div className="image">
            <img src={mainAboutImage} alt="ABOUT" />
          </div>
          <div
            className="image absolute z_1"
            style={{
              bottom: "-60px",
              left: "-100px",
            }}
          >
            <img src={altAboutImage} alt="ABOUT_ALT" />
            <div className="absolute pattern l-50 h-100 z_-1">
              <img src={pattern} alt="PATTERN" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
