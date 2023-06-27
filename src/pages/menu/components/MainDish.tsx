import { dish } from "../../../hooks/useMenu";
import { motion as m } from "framer-motion";
import logo from "../../../assets/logo.png";
import {
  BiCartAdd,
  BsArrowRight,
  BsStars,
  CgRemove,
  FaComments,
  MdOutlineAddShoppingCart,
  MdStarRate,
} from "react-icons/all";
import AltButton from "../../../components/altButton";
type props = {
  mainDish: dish | undefined;
  setIsRate: React.Dispatch<React.SetStateAction<boolean>>;
  setIsComments: React.Dispatch<React.SetStateAction<boolean>>;
  isInCart: boolean;
  handleCart: (dish: dish) => void;
};
function MainDish({
  mainDish,
  setIsRate,
  isInCart,
  handleCart,
  setIsComments,
}: props) {
  return (
    <div className="z_1 flex align-center justify-between g-1 main_dish">
      <div
        className="image relative centering-content centering-content "
        style={{
          width: "400px",
          height: "450px",
        }}
      >
        {mainDish && (
          <m.img
            src={`https://www.talebRestaurantApi.onrender.com/assets/menu/${mainDish.cat}/${mainDish?.imageName}`}
            style={{
              height: mainDish.cat === "drinks" ? "400px" : "",
            }}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.1,
                type: "spring",
                stiffness: 60,
              },
            }}
          />
        )}
        <div
          className="absolute alt-bg z_-1 large_med_screen dark-box-shadow"
          style={{
            height: "200%",
            top: "-95%",
            left: "50%",
            width: "80%",
            transform: "translateX(-50%)",
          }}
        ></div>
      </div>
      <div className="flex flex-column g-2 p-3 flex-1 main_dish_content">
        {mainDish && (
          <>
            <m.h1
              className="uppercase fs-x-large cool_title relative name"
              style={{
                textAlign: "start",
              }}
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 0.75,
                  type: "spring",
                  stiffness: 90,
                },
              }}
            >
              {mainDish?.name}
            </m.h1>
            <m.p
              className="details cool_content capitalize w-100"
              style={{
                textAlign: "start",
              }}
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 1.1,
                  type: "spring",
                  stiffness: 90,
                },
              }}
            >
              {mainDish?.info}
            </m.p>
            <m.span
              className="price cl-g bold flex g-1 align-center capitalize w-100"
              style={{
                textAlign: "start",
              }}
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 1.1,
                  type: "spring",
                  stiffness: 90,
                },
              }}
            >
              <span>{mainDish?.price}</span>
              <div className="icon flex fs-large">
                <BiCartAdd />
              </div>
            </m.span>
            <m.div
              className="flex align-center g-1 fs-large"
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 1.4,
                  type: "spring",
                  stiffness: 90,
                },
              }}
            >
              <span className="cl-t bold">{mainDish.rate}</span>
              <span className="flex cl-bl">
                <BsStars />
              </span>
              <div
                className="h-100 flex"
                style={{
                  width: "1px",
                  height: "40px",
                  backgroundColor: "#bbb",
                }}
              ></div>
              <div className="flex flex-column g-1">
                <span
                  className="uppercase bold fs-x-small cl-w letter-s-1"
                  style={{
                    textShadow: "1px 1px 10px",
                  }}
                >
                  see what people see about this dish
                </span>
                <div
                  className="cl-w fs-b-small centering-content pointer"
                  onClick={() => setIsComments(true)}
                >
                  <m.span
                    initial={{
                      x: 0,
                    }}
                    animate={{
                      x: 10,
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "linear",
                    }}
                  >
                    <BsArrowRight />
                  </m.span>
                </div>
              </div>
            </m.div>
            <m.div
              className="grid g-1 align-center w-100"
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.2,
                  delay: 1.6,
                  type: "spring",
                  stiffness: 90,
                },
              }}
              style={{
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              }}
            >
              {!isInCart ? (
                <AltButton
                  bgColor="khaled-bg"
                  color="cl-b"
                  content="add to cart"
                  Icon={MdOutlineAddShoppingCart}
                  fn={() => handleCart(mainDish)}
                  width="w-100"
                  valid={true}
                />
              ) : (
                <AltButton
                  bgColor="red_gradient_bg"
                  color="cl-b"
                  content="remove from cart"
                  Icon={CgRemove}
                  fn={() => handleCart(mainDish)}
                  width="w-100"
                  valid={true}
                />
              )}
              <AltButton
                bgColor="blue_gradient_bg"
                color="cl-b"
                content="rate"
                Icon={MdStarRate}
                fn={() => setIsRate(true)}
                width="w-100"
                valid={true}
              />
            </m.div>
          </>
        )}
      </div>
    </div>
  );
}
export default MainDish;
