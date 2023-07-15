import { BiCart, BiDish, BiMenu } from "react-icons/bi";
import { IoCloseCircle } from "react-icons/io5";
import { FaComments } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import logo from "../../assets/logo.png";
import { motion as m } from "framer-motion";
import "./menu.scss";
import useMenu, { menuCategories } from "../../hooks/useMenu";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import MenuNav from "./components/MenuNav";
import Rate from "./components/Rate";
import Cart from "./components/Cart";
import MainDish from "./components/MainDish";
import Order from "../../components/order";
import ServerResponse from "../../components/serverResponse";
import { UseContext } from "../../context/UseContext";
import AltNav from "../../components/altnav/AltNav";
import { Helmet } from "react-helmet";
import cover from "../../assets/menu2.jpg";
import CoolImage from "../../components/coolImage/CoolImage";
import { ImSpoonKnife } from "react-icons/im";
SwiperCore.use([Pagination]);
function Menu() {
  const MENU_CATEGORIES: menuCategories[] = [
    "pizza",
    "meal",
    "salad",
    "sweet",
    "fastFood",
    "breakFast",
    "drinks",
  ];
  const SWEET_DETAIlS = ["all", "ice cream", "cake", "others"];
  const FAST_FOOD_DETAILS = ["all", "burger", "sandwiches", "snacks"];
  const DRINKS_DETAIL = ["all", "cola", "hot drinks", "cold drinks"];
  const { serverResponse, isOrder, cat, setCat, loader } = UseContext();
  const {
    mainDish,
    setCart,
    setMainDish,
    isToggle,
    setIsToggle,
    detail,
    setDetail,
    menuState,
    isRate,
    setIsRate,
    cart,
    isCart,
    setIsCart,
    handleCart,
    isInCart,
    setTotal,
    total,
    isComments,
    setIsComments,
    getMenu,
  } = useMenu();
  return (
    <div
      className="menu flex flex-column relative pb-3"
      style={{
        minHeight: "100vh",
      }}
    >
      <Helmet>
        <link rel="icon" href={logo} />
        <title>Taleb Restaurant | Menu</title>
      </Helmet>
      <div
        className="blur-load"
        style={{
          backgroundImage: 'url("src/assets/menu2-small.jpg")',
          position: "absolute",
        }}
      >
        <img
          src={cover}
          alt="COVER"
          className="fixed w-100 h-100 l-0 t-0 fit-cover"
          loading="lazy"
        />
      </div>
      {loader ? (
        <>
          <div
            className="fixed l-0 t-0 w-100 h-100 alt-bg opacity-100 z-100000 pt-3"
            style={{ zIndex: 999999999991 }}
          >
            <div className="image m-auto w-fit">
              <img src={logo} alt="LOGO" width={150} />
            </div>
          </div>
          <div className="loader" style={{ zIndex: 999999999999 }}></div>
        </>
      ) : (
        <>
          {(isRate || isCart || serverResponse || isComments) && (
            <div className="absolute l-0 t-0 w-100 h-100 black-bg opacity-70 z-100000"></div>
          )}
          {isOrder && (
            <div
              className="absolute l-0 t-0 w-100 h-100 black-bg opacity-70"
              style={{
                zIndex: 1000001,
              }}
            ></div>
          )}
          {isComments && (
            <m.div
              className="radius-s overflow-auto flex p-2 flex-column g-1 z-100000 fixed l-50 main-bg dark-box-shadow comments"
              style={{
                transform: "translateX(-50%)",
                top: "10%",
                minWidth: "60%",
                maxHeight: "500px",
              }}
              initial={{
                x: "-50%",
                y: 100,
                opacity: 0,
              }}
              animate={{
                x: "-50%",
                y: 0,
                opacity: 1,
                transition: {
                  delay: 0.3,
                },
              }}
            >
              <div
                className="absolute r-0 t-0 pointer fs-med cl-r flex"
                onClick={() => setIsComments(false)}
              >
                <IoCloseCircle />
              </div>
              <div className="flex align-center g-2 justify-center">
                <h1 className="cl-w cool_title uppercase">Comments</h1>
                <div className="flex cl-khaled fs-large">
                  <FaComments />
                </div>
              </div>
              <ul className="flex flex-column g-1">
                {mainDish?.peopleComments.map(
                  (d: { name: string; comment: string }) => (
                    <li
                      className="flex flex-column alt-bg g-1 p-1 radius-s"
                      style={{
                        border: "1px solid #555",
                      }}
                    >
                      <span className="bold">{d.name}</span>
                      <span className="cl-t">{d.comment}</span>
                    </li>
                  )
                )}
              </ul>
            </m.div>
          )}
          <div
            className="absolute t-0 l-0 main-bg w-100 h-100"
            style={{
              opacity: 0.85,
            }}
          ></div>
          <div className="absolute main-bg z_-1 d-none mobile_shape dark-box-shadow"></div>
          {isCart && (
            <Cart
              setIsCart={setIsCart}
              setCart={setCart}
              cart={cart}
              setTotal={setTotal}
              total={total}
            />
          )}
          <AltNav>
            <div
              className=" flex cl-w pointer relative"
              onClick={() => setIsCart(true)}
            >
              <span className="flex fs-large">
                <BiCart />
              </span>
              {cart.length > 0 && (
                <span
                  className="absolute centering-content bold cl-b circle khaled-bg"
                  style={{
                    top: "-5px",
                    right: "-5px",
                    aspectRatio: "1/1",
                    width: "20px",
                  }}
                >
                  {cart.length}
                </span>
              )}
            </div>
            <div
              className="fs-large flex cl-w pointer z-100000"
              onClick={() => {
                setIsToggle((prev) => !prev);
              }}
            >
              {isToggle ? <CgClose /> : <BiMenu />}
            </div>
          </AltNav>
          <div className="container flex flex-column g-1 relative">
            {isToggle && (
              <>
                <div className="fixed w-100 h-100 l-0 t-0 opacity-90 alt-bg z-100000"></div>
                <m.ul
                  className="fixed w-100 h-100 r-0 t-0 flex flex-column align-center justify-center radius-s z-100000"
                  initial={{
                    opacity: 0,
                    y: -300,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.2,
                      type: "spring",
                      stiffness: 90,
                    },
                  }}
                >
                  <li
                    className="absolute r-0 t-0 cl-r pointer fs-med"
                    onClick={() => setIsToggle(false)}
                  >
                    <IoCloseCircle />
                  </li>
                  <li className="centering-content g-1 ">
                    <span className="flex cl-khaled fs-large">
                      <BiDish />
                    </span>
                    <span
                      className="h-100"
                      style={{
                        width: "2px",
                        background: "#aaa",
                      }}
                    >
                      <span className="d-none">a</span>
                    </span>
                    <span className="cl-khaled fs-large flex">
                      <ImSpoonKnife />
                    </span>
                  </li>
                  <li
                    className="w-70"
                    style={{
                      height: "2px",
                      background: "#aaa",
                    }}
                  ></li>
                  {MENU_CATEGORIES.map((category) => (
                    <m.li
                      key={category}
                      className={`p-2 centering-content g-1 pointer cat  ${
                        cat === category && "cl-khaled"
                      }`}
                      onClick={() => {
                        setCat(category);
                        setIsToggle(false);
                      }}
                      whileHover={{
                        color: "#e4c590",
                      }}
                    >
                      <span className={`uppercase letter-s-1`}>{category}</span>
                    </m.li>
                  ))}
                </m.ul>
              </>
            )}
            <MainDish
              mainDish={mainDish}
              setIsRate={setIsRate}
              isInCart={isInCart}
              handleCart={handleCart}
              setIsComments={setIsComments}
            />
            {serverResponse && <ServerResponse response={serverResponse} />}
            {isOrder && (
              <Order
                setIsCart={setIsCart}
                payload={total}
                type="normal"
                clearCart={() => {
                  setCart([]);
                  setTotal([]);
                }}
              />
            )}
            {isRate && mainDish && (
              <Rate
                setIsRate={setIsRate}
                id={mainDish?._id}
                getMenu={getMenu}
              />
            )}
            {cat === "drinks" && (
              <MenuNav
                details={DRINKS_DETAIL}
                detail={detail}
                setDetail={setDetail}
              />
            )}
            {cat === "sweet" && (
              <MenuNav
                details={SWEET_DETAIlS}
                detail={detail}
                setDetail={setDetail}
              />
            )}
            {cat === "fastFood" && (
              <MenuNav
                details={FAST_FOOD_DETAILS}
                detail={detail}
                setDetail={setDetail}
              />
            )}
            {menuState && (
              <m.div
                className={`${
                  !(cat === "fastFood" || cat == "drinks" || cat == "sweet")
                    ? "mt-3"
                    : ""
                }`}
                initial={{
                  opacity: 0,
                  x: -350,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 2.2,
                  },
                }}
              >
                <Swiper
                  effect={"slide"}
                  grabCursor={true}
                  slidesPerView={"auto"}
                  pagination={true}
                  className="mySwiper"
                >
                  {menuState &&
                    menuState
                      .filter((dish) => dish.name != mainDish?.name)
                      .map((dish) => (
                        <SwiperSlide
                          className="h-100"
                          key={dish.name}
                          style={{
                            maxWidth: "150px",
                          }}
                          onClick={() => {
                            setMainDish(undefined);
                            setTimeout(() => {
                              setMainDish(dish);
                            }, 10);
                          }}
                        >
                          <m.div
                            className="flex flex-column h-100 g-3 main-bg p-1 dish radius-m relative  pointer dark-box-shadow"
                            initial={{
                              opacity: 0,
                            }}
                            animate={{
                              opacity: 1,
                            }}
                          >
                            <div
                              className="image absolute mb-3 centering-content"
                              style={{
                                left: "-15%",
                                top: "-20%",
                                width: "80px",
                                height: "80px",
                              }}
                            >
                              <CoolImage
                                thumb={`https://taleb-restaurant-api.onrender.com/assets/${
                                  dish.imageName.trim().split(".")[0] +
                                  "-small." +
                                  dish.imageName.trim().split(".")[1]
                                }`}
                                height={cat === "drinks" ? 80 : ""}
                                width={80}
                                type={cat}
                                url={`https://taleb-restaurant-api.onrender.com/assets/${dish.imageName.trim()}`}
                                // url={`http://localhost:3500/assets/${dish.imageName.trim()}`}
                              />
                            </div>
                            <div className="flex justify-end price">
                              <h3 className="name fs-small bold cl-g">
                                {dish.price}
                              </h3>
                            </div>
                            <div className="flex flex-column g-1 dish_info centering-content">
                              <p className="name fs-x-small bold cl-khaled uppercase txt-c">
                                {dish.name}
                              </p>
                            </div>
                          </m.div>
                        </SwiperSlide>
                      ))}
                </Swiper>
              </m.div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
export default Menu;
