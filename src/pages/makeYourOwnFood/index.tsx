import { useNavigate } from "react-router-dom";
import video from "../../assets/makeYourOwnFood.mp4";
import Button from "../../components/button";
import SectionTitle from "../../components/sectionTitle";
import { TbChefHat } from "react-icons/tb";
function MakeYourOwnFood() {
  const navigate = useNavigate();
  return (
    <div
      className="makeYourOwnFood section relative flex overflow-hidden flex flex-column g-3"
      id="make-your-food"
    >
      <div className="absolute w-100 h-100 l-0 t-0 centering-content">
        <video
          src={video}
          autoPlay
          controls
          muted
          loop
          style={{
            maxWidth: "100%",
            width: "100%",
          }}
        ></video>
      </div>
      <div className="z_1">
        <SectionTitle title="make your own food" />
      </div>
      <h1 className="cool_title capitalize z_1 txt-c">
        every one have a chef inside him
      </h1>
      <div className="z_1 centering-content">
        <Button
          content="try yours"
          outline=""
          altColor="cl-khaled"
          bgColor="khaled-bg"
          color="cl-b"
          button_circle_bg_color="black-bg"
          clickFunction={() => navigate("/makeYourFood")}
          valid={true}
          Icon={TbChefHat}
        />
      </div>
      <div className="absolute l-0 t-0 w-100 h-100 black-bg opacity-60"></div>
    </div>
  );
}
export default MakeYourOwnFood;
