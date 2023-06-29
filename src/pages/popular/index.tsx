import "./popular.scss";
import { useEffect, useState } from "react";
import Button from "../../components/button";
import { motion as m } from "framer-motion";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import myAxios from "../../api/axios";
import { dish } from "../../hooks/useMenu";
import { UseContext } from "../../context/UseContext";
import Order from "../../components/order";
import { CiWarning } from "react-icons/ci";
import AltNav from "../../components/AltNav";
import { TbToolsKitchen } from "react-icons/tb";
import { BsTruck } from "react-icons/bs";
import ServerResponse from "../../components/serverResponse";
import AltButton from "../../components/altButton";
import { BiHome } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { Helmet } from "react-helmet";
SwiperCore.use([Pagination]);
function Popular() {
  const {
    setServerResponse,
    setIsOrder,
    isOrder,
    serverResponse,
    setLoader,
    loader,
  } = UseContext();
  const [popular, setPopular] = useState<undefined | dish[]>();
  const [mainDish, setMainDish] = useState<undefined | dish>();
  const [rotate, setRotate] = useState<number | undefined>(0);
  const navigate = useNavigate();
  function addToRes(arr: dish[]) {
    let dishes = [];
    for (let i = 0; i < arr.length; i++) {
      if (i == 0) {
        dishes.push({
          ...arr[i],
          rotate: 0,
          left: "50%",
          bottom: "-250px",
          transform: "translateX(-50%)",
          dishNumber: i + 1,
        });
      } else if (i == 1) {
        dishes.push({
          ...arr[i],
          rotate: 90,
          right: "-250px",
          top: "50%",
          transform: "translateY(-50%)",
          dishNumber: i + 1,
        });
      } else if (i == 2) {
        dishes.push({
          ...arr[i],
          rotate: 180,
          left: "50%",
          top: "-250px",
          transform: "translateX(-50%)",
          dishNumber: i + 1,
        });
      } else {
        dishes.push({
          ...arr[i],
          left: "-250px",
          top: "50%",
          transform: "translateY(-50%)",
          rotate: 270,
          dishNumber: i + 1,
        });
      }
    }
    return dishes;
  }
  function getPopular() {
    setLoader(true);
    myAxios
      .get("/menu/popular")
      .then((res: AxiosResponse) => {
        setLoader(false);
        setPopular(addToRes(res.data));
        setMainDish(addToRes(res.data)![0]);
      })
      .catch(() => {
        setLoader(false);
        setServerResponse({
          type: "error",
          content: "The Server Is Not Working Write Now , Try Again Letter",
        });
      });
  }
  useEffect(() => {
    getPopular();
  }, []);
  return (
    <div className="popular alt-bg relative overflow-hidden pb-3" id="popular">
      <Helmet>
        <title>Taleb Restaurant | Popular</title>
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
      <div className="absolute l-0 t-0 w-100 h-100 alt-bg opacity-80"></div>
      {!popular ? (
        <div className="flex flex-column align-center g-3 absolute l-50 t-50 translate-50 container">
          <div
            className="flex cl-r"
            style={{
              fontSize: "7rem",
            }}
          >
            <CiWarning />
          </div>
          <h1 className=" neon txt-c ">THE SERVER IS NOT WORKING WRITE NOW</h1>
          <AltButton
            bgColor="blue_gradient_bg"
            color="cl-b"
            content="go back"
            Icon={BiHome}
            valid={true}
            fn={() => navigate("/")}
            width="w-50"
          />
        </div>
      ) : (
        <>
          {isOrder && (
            <div
              className="fixed w-100 h-100 black-bg l-0 t-0 opacity-80"
              style={{
                zIndex: 1000000,
              }}
            ></div>
          )}
          {isOrder && (
            <>
              {mainDish && (
                <Order
                  payload={[
                    {
                      name: mainDish?.name,
                      number: 1,
                      price: parseInt(mainDish?.price.split(",").join("")),
                    },
                  ]}
                  type="order"
                />
              )}
            </>
          )}
          <div
            className="container grid g-3"
            style={{
              gridTemplateRows: "40px 350px 1fr",
            }}
          >
            <AltNav>
              <div className="flex cl-khaled fs-large popular-icon">
                <TbToolsKitchen />
              </div>
              <div className="flex uppercase align-center cl-w neon flex-column g-1">
                <h1 className="">popular</h1>
                <h1 className="">dishes</h1>
              </div>
            </AltNav>
            {serverResponse && (
              <>
                <div className="fixed l-0 t-0 w-100 h-100 black-bg opacity-70 z-100000"></div>
                <ServerResponse response={serverResponse} />
              </>
            )}
            {mainDish && (
              <div
                className="=g-3 grid popular_main_dish_container"
                style={{
                  gridTemplateColumns: "50% 1fr",
                }}
              >
                <div className="design_helper"></div>
                <div
                  className="circle relative smooth-3 h-fit align-center smooth-5 absolute popular_shape"
                  style={{
                    width: "1150px",
                    aspectRatio: "1/1",
                    border: "100px solid #e4c590a8",
                    top: "-91%",
                    left: "-7%",
                    transform: `rotate(${rotate}deg)`,
                  }}
                >
                  {popular?.map((dish, index) => (
                    <m.div
                      className="absolute"
                      style={{
                        left: dish.left && dish.left,
                        top: dish.top && dish.top,
                        bottom: dish.bottom && dish.bottom,
                        right: dish.right && dish.right,
                        transform: dish.transform && dish.transform,
                      }}
                      key={index}
                    >
                      <m.img
                        src={`https://www.taleb-restaurant-api.onrender.com/assets/${dish?.imageName}`}
                        alt="MAIN_DISH"
                        width={400}
                        initial={{
                          opacity: 0,
                        }}
                        animate={{
                          opacity: 1,
                          transition: {
                            duration: 1,
                          },
                        }}
                      />
                    </m.div>
                  ))}
                </div>
                <div className="flex flex-column z-100000 g-1 main_dish">
                  <p className="cl-t uppercase letter-s-1 fs-med">
                    #{mainDish?.dishNumber}
                  </p>
                  <h1
                    className="fs-x-large uppercase cl-w main-title"
                    style={{
                      letterSpacing: "-2px",
                      fontWeight: "normal",
                    }}
                  >
                    {mainDish?.cat}
                  </h1>
                  <h1
                    className="cl-r uppercase fs-x-large main-title "
                    style={{
                      letterSpacing: "-2px",
                    }}
                  >
                    {mainDish?.name}
                  </h1>
                  <p className="cool_content details">{mainDish?.info}</p>
                  <div className="flex g-1 align-center">
                    <span className="cl-t">Price:</span>
                    <span className="cl-g">{mainDish?.price}</span>
                  </div>
                  <div className="flex w-100 mt-2 button_container">
                    <Button
                      content="order"
                      altColor="cl-b"
                      outline="outline"
                      bgColor="black-bg"
                      button_circle_bg_color="khaled-bg"
                      color="cl-khaled"
                      valid={true}
                      clickFunction={() => {
                        setIsOrder(true);
                      }}
                      Icon={BsTruck}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="mt-3">
              <Swiper
                effect={"slide"}
                grabCursor={true}
                slidesPerView={"auto"}
                pagination={true}
                className="mySwiper"
              >
                {popular?.map((dish) => (
                  <SwiperSlide
                    className={`flex p-2 align-center flex-column g-2 pointer h-fit cl-khaled ${
                      mainDish?.name === dish.name && "alt-bg dark-box-shadow"
                    }`}
                    key={dish.name}
                    style={{
                      maxWidth: "180px",
                      borderLeft:
                        mainDish?.name === dish.name ? "1px solid" : "",
                      borderRight:
                        mainDish?.name === dish.name ? "1px solid" : "",
                    }}
                    onClick={() => {
                      setMainDish(dish);
                      setRotate(dish.rotate);
                    }}
                  >
                    <div className="image">
                      <img
                        src={`https://www.taleb-restaurant-api.onrender.com/assets/${dish?.imageName}`}
                        alt="DISH"
                        width={150}
                      />
                    </div>
                    <h3
                      className="cl-khaled txt-c uppercase fs-small letter-s-1"
                      style={{
                        textShadow: "1px 1px 10px",
                      }}
                    >
                      {dish.name}
                    </h3>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default Popular;
