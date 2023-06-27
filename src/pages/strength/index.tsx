import SectionTitle from "../../components/sectionTitle";
import StrengthBox from "./components/StrengthBox";
import strengthI from "../../assets/features-icon-1.png";
import strengthII from "../../assets/features-icon-2.png";
import strengthIII from "../../assets/features-icon-3.png";
import strengthIV from "../../assets/features-icon-4.png";
import shape from "../../assets/strength_shape.png";
import "./strength.scss";
function OurStrength() {
  return (
    <div className="section strength alt-bg flex flex-column g-2 relative">
      <div className="absolute b-0 l-0">
        <img src={shape} alt="" />
      </div>
      <div className="container">
        <SectionTitle title="WHY CHOOSE US" />
        <h1 className="cool_title txt-c">Our Strength</h1>
        <div className="strength_boxes mt-3">
          <StrengthBox
            content="Our restaurant prioritizes your health and well-being."
            title="Hygienic Food"
            image={strengthI}
          />
          <StrengthBox
            content="In our restaurant, the atmosphere radiates freshness and vitality."
            title="Fresh Environment"
            image={strengthII}
          />
          <StrengthBox
            content="Our chefs are a group of skilled and exceptionally talented culinary experts who excel in the art of cooking."
            title="Skilled Chefs"
            image={strengthIII}
          />
          <StrengthBox
            content="We provide event and party services to ensure an exceptional and memorable experience for our guests"
            title="Event & Party"
            image={strengthIV}
          />
        </div>
      </div>
    </div>
  );
}
export default OurStrength;
