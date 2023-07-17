import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { GiFoodTruck } from "react-icons/gi";
import SectionTitle from "../../../components/sectionTitle";
import Button from "../../../components/button";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
type props = {
  cover: string;
  title: string;
  active: boolean;
  nextSlide: () => void;
  prevSlide: () => void;
};
function Content({ cover, title, active, nextSlide, prevSlide }: props) {
  const navigate = useNavigate();
  return (
    <>
      {active && (
        <div
          className={`smooth-5 content ${
            active && "active"
          } flex-1 flex flex-column`}
        >
          <div className="cover absolute l-50 t-50 translate-50 image w-100 h-100 overflow-hidden">
            <m.img
              initial={{
                scale: 1,
                opacity: 0.3,
              }}
              animate={{
                scale: 1.3,
                opacity: 1,
              }}
              transition={{
                duration: 10,
              }}
              src={cover}
              alt="Cover"
              style={{
                objectFit: "cover",
                width: "1880px",
                height: "950px",
              }}
            />
          </div>
          <div className="container flex flex-column g-3 relative flex-1 h-100">
            <m.div
              className="absolute controller_l l-0 t-50 z_1 fs-b-small flex cl-khaled pointer centering-content"
              style={{
                border: "1px solid",
                rotate: "45deg",
                width: "40px",
                height: "40px",
              }}
              whileHover={{
                color: "#000",
                backgroundColor: "#e4c590",
              }}
              onClick={prevSlide}
            >
              <div
                className="flex"
                style={{
                  rotate: "-45deg",
                }}
              >
                <AiOutlineArrowLeft />
              </div>
            </m.div>
            <m.div
              className="absolute controller_r r-0 t-50 z_1 fs-b-small flex centering-content cl-khaled p-1 pointer"
              style={{
                border: "1px solid",
                rotate: "45deg",
                width: "40px",
                height: "40px",
              }}
              whileHover={{
                color: "#000",
                backgroundColor: "#e4c590",
              }}
              onClick={nextSlide}
            >
              <div
                className="flex"
                style={{
                  rotate: "-45deg",
                }}
              >
                <AiOutlineArrowRight />
              </div>
            </m.div>
            <div
              className="flex-1 grid home_content_view"
              style={{
                gridTemplateRows: "40px 350px 1fr",
              }}
            >
              <SectionTitle title="traditional & HYGINE" animate={true} />
              <div className="flex flex-column align-center g-1 w-100 align-center flex-1 justify-center">
                <m.h1
                  className="txt-c cool_title"
                  style={{
                    fontSize: "7rem",
                    maxWidth: "90%",
                  }}
                  initial={{
                    y: "20%",
                    opacity: 0,
                  }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 1,
                  }}
                >
                  {title}
                </m.h1>
                <m.p
                  className="fs-b-small txt-c"
                  initial={{
                    y: "30%",
                    opacity: 0,
                  }}
                  animate={{
                    y: "0%",
                    opacity: 1,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 1.5,
                  }}
                >
                  Come with family & feel the joy of mouthwatering food
                </m.p>
              </div>
              <div className="w-fit m-auto">
                <Button
                  outline="outline"
                  color="cl-khaled"
                  content="view our menu"
                  altColor="cl-b"
                  button_circle_bg_color="khaled-bg"
                  animate={true}
                  clickFunction={() => navigate("/menu")}
                  valid={true}
                  Icon={GiFoodTruck}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Content;
