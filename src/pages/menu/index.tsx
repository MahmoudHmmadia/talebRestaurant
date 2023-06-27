import {
  IoReturnDownBackOutline,
  BiCart,
  BiMenu,
  CgClose,
  FaComments,
  IoCloseCircle,
} from "react-icons/all";
import logo from "../../assets/logo.png";
import { motion as m } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./menu.scss";
import useMenu, { menuCategories } from "../../hooks/useMenu";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import MenuNav from "./components/MenuNav";
import { useEffect, useState } from "react";
import Rate from "./components/Rate";
import Cart from "./components/Cart";
import MainDish from "./components/MainDish";
import Order from "../../components/order";
import ServerResponse from "../../components/serverResponse";
import { UseContext } from "../../context/UseContext";
import AltNav from "../../components/AltNav";
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
              className="fs-large flex cl-w pointer"
              onClick={() => {
                setIsToggle((prev) => !prev);
              }}
            >
              {isToggle ? <CgClose /> : <BiMenu />}
            </div>
          </AltNav>
          <div className="container flex flex-column g-1 relative">
            {isToggle && (
              <m.ul
                className="absolute r-0 t-0 flex flex-column radius-s alt-bg w-20 z-100000"
                initial={{
                  opacity: 0,
                  x: 150,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.5,
                    type: "spring",
                    stiffness: 50,
                  },
                }}
              >
                {MENU_CATEGORIES.map((category) => (
                  <m.li
                    key={category}
                    className={`p-2 centering-content g-1 pointer cat ${
                      cat === category && "cl-b khaled-bg"
                    }`}
                    onClick={() => {
                      setCat(category);
                      setIsToggle(false);
                    }}
                    whileHover={{
                      color: "#000",
                      backgroundColor: "#e4c590",
                    }}
                  >
                    <span className={`uppercase letter-s-1`}>{category}</span>
                  </m.li>
                ))}
              </m.ul>
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
                              <img
                                src={`http://localhost:3500/assets/menu/${
                                  dish.cat && dish.cat
                                }/${dish?.imageName.trim()}`}
                                alt="DISH"
                                className="fit-contain"
                                style={{
                                  height: cat === "drinks" ? "80px" : "",
                                }}
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
