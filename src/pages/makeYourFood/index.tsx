import { TbChefHat } from "react-icons/tb";
import { CiBurger } from "react-icons/ci";
import { FaPizzaSlice } from "react-icons/fa";
import pizza from "../../assets/pizza.png";
import pizzaLogo from "../../assets/pizzaLogo.png";
import burgerLogo from "../../assets/burgerLogo.png";
import burger from "../../assets/burger.png";
import { motion as m } from "framer-motion";
import useMakeFood from "../../hooks/useMakeFood";
import FoodCard from "./components/FoodCards";
import "./makeYourFood.scss";
import { makeYourFood } from "../../constants/data";
import { UseContext } from "../../context/UseContext";
import ServerResponse from "../../components/serverResponse";
import AltNav from "../../components/altnav/AltNav";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import cover from "../../assets/makeYourFood3.jpg";
function MakeYourFood() {
  const { isBurger, isPizza, setIsBurger, setIsPizza } = useMakeFood();
  const { serverResponse, setLoader, loader } = UseContext();
  useEffect(() => {
    const blurContainers = document.querySelectorAll(".blur-load");
    blurContainers.forEach((div) => {
      const img = div.querySelector("img");
      function loaded() {
        div.classList.add("loaded");
      }
      if (img?.complete) loaded();
      else img?.addEventListener("load", loaded);
    });
  });
  return (
    <div
      className="makeYourFood flex flex-column g-3 relative pb-3"
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        className="blur-load"
        style={{
          backgroundImage: 'url("src/assets/makeYourFood3-small.jpg")',
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
      <Helmet>
        <title>Taleb Restaurant | Make Your Food</title>
      </Helmet>
      {loader && (
        <>
          <div
            className="fixed l-0 t-0 w-100 h-100 black-bg opacity-100 z-100000"
            style={{ zIndex: 999999999991 }}
          ></div>
          <div className="loader" style={{ zIndex: 999999999999 }}></div>
        </>
      )}
      <div className="absolute l-0 t-0 w-100 opacity-70 h-100 alt-bg"></div>
      <AltNav>
        <div className="logo flex align-center g-1">
          <div className="icon cl-khaled fs-x-large logo flex">
            <TbChefHat />
          </div>
          <div className="flex flex-column g-1 cl-w title uppercase neon">
            <h1>make your</h1>
            <h1>own food</h1>
          </div>
        </div>
      </AltNav>
      {serverResponse && (
        <>
          <div className="absolute l-0 t-0 w-100 h-100 black-bg opacity-70 z-100000"></div>
          <ServerResponse
            response={serverResponse}
            reset={() => {
              setIsPizza(false);
              setIsBurger(false);
            }}
          />
        </>
      )}
      {!isPizza && !isBurger ? (
        <div className="flex g-3 justify-between pt-3 flex-1 container makeYourFood_boxes relative">
          <div
            className="pizza pointer h-fit circle smooth-5 dark-box-shadow p-3"
            style={{
              backgroundColor: "#0e0d0c87",
            }}
          >
            <div className="pizza_logo smooth-5 centering-content">
              <div
                className="blur-load"
                style={{
                  backgroundImage: `url("src/assets/pizza-small.png")`,
                }}
              >
                <img src={pizza} alt="PIZZA" width={350} loading="lazy" />
              </div>
            </div>
            <div className="radius-s g-1 absolute l-50 t-50 translate-50 p-2 d-none align-center scale-0 smooth-5 make_pizza opacity-0 w-100 h-100">
              <div className="image scale-0">
                <div
                  className="blur-load"
                  style={{
                    backgroundImage: 'url("src/assets/pizzaLogo-small.png")',
                  }}
                >
                  <img src={pizzaLogo} alt="PIZZA" loading="lazy" />
                </div>
              </div>
              <div className="flex flex-column g-2 align-start content ">
                <div className="flex g-1 align-center title">
                  <h1 className="cl-khaled letter-s-1 txt-c">PIZZA</h1>
                  <div className="icon flex cl-khaled fs-large">
                    <FaPizzaSlice />
                  </div>
                </div>
                <p className="cool_content capitalize content fs-small">
                  try to make your own pizza , and we will help you to use the
                  magician chef who hide inside your heart to make the most
                  delicious pizza!
                </p>
                <m.button
                  className="uppercase bold letter-s-1 p-1 khaled-bg w-100 radius-s"
                  whileHover={{
                    scale: 0.9,
                  }}
                  onClick={() => setIsPizza(true)}
                >
                  try it
                </m.button>
              </div>
            </div>
          </div>
          <div
            className="burger pointer h-fit circle smooth-5 dark-box-shadow p-3"
            style={{
              backgroundColor: "#0e0d0c87",
            }}
          >
            <div className="burger_logo smooth-5 centering-content">
              <div
                className="blur-load"
                style={{
                  backgroundImage: 'url("src/assets/burger-small.png")',
                }}
              >
                <img src={burger} alt="BURGER" width={350} loading="lazy" />
              </div>
            </div>
            <div className="radius-s g-1 absolute l-50 t-50 translate-50 d-none align-center scale-0 smooth-5 make_burger opacity-0 w-100 h-100 p-2">
              <div className="flex flex-column g-2 align-start content">
                <div className="flex g-1 align-center title">
                  <h1 className="cl-khaled letter-s-1 txt-c">BURGER</h1>
                  <div className="icon flex cl-khaled fs-large">
                    <CiBurger />
                  </div>
                </div>
                <p className="cool_content capitalize content fs-small">
                  try to make your own burger , and we will help you to use the
                  magician chef who hide inside your heart to make the most
                  delicious burger!
                </p>
                <m.button
                  className="uppercase bold letter-s-1 p-1 khaled-bg w-100 radius-s"
                  whileHover={{
                    scale: 0.9,
                  }}
                  onClick={() => setIsBurger(true)}
                >
                  try it
                </m.button>
              </div>
              <div className="image scale-0">
                <div
                  className="blur-load"
                  style={{
                    backgroundImage: 'url("src/assets/burgerLogo-small.png")',
                  }}
                >
                  <img src={burgerLogo} alt="Burger" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : isPizza ? (
        <FoodCard
          typeToChose={makeYourFood.pizza.typeToChose}
          typeToAdd={makeYourFood.pizza.typesToAdd}
          main="pizza"
          setIsMain={setIsPizza}
        />
      ) : (
        <FoodCard
          typeToChose={makeYourFood.burger.typeToChose}
          typeToAdd={makeYourFood.burger.typesToAdd}
          main="burger"
          setIsMain={setIsBurger}
        />
      )}
    </div>
  );
}
export default MakeYourFood;
