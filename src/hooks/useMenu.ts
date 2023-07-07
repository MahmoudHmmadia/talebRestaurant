import { useEffect, useState } from "react";
import myAxios from "../api/axios";
import { UseContext } from "../context/UseContext";
import { AxiosResponse } from "axios";
export type menuCategories =
  | "pizza"
  | "meal"
  | "salad"
  | "sweet"
  | "fastFood"
  | "breakFast"
  | "drinks";
export type dish = {
  _id: string;
  imageName: string;
  name: string;
  info: string;
  price: string;
  rate: number;
  orderTimes: number;
  peopleComments: [];
  cat: menuCategories;
  type?: string;
  rotate?: number;
  left?: string;
  bottom?: string;
  top?: string;
  right?: string;
  transform?: string;
  dishNumber?: number;
  blurHash: string;
};
function useMenu() {
  const { cat, setServerResponse, setLoader } = UseContext();
  const [menu, setMenu] = useState<dish[] | undefined>(undefined);
  const [mainDish, setMainDish] = useState<dish | undefined>(undefined);
  const [isToggle, setIsToggle] = useState(false);
  const [detail, setDetail] = useState<string>("all");
  const [menuState, setMenuState] = useState<dish[]>();
  const [isRate, setIsRate] = useState(false);
  const [cart, setCart] = useState<dish[]>([]);
  const [isCart, setIsCart] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [isComments, setIsComments] = useState(false);
  const [total, setTotal] = useState<
    { name: string; price: number; number: number; category: menuCategories }[]
  >([]);
  function getMenu() {
    setLoader(true);
    setMenu(undefined);
    myAxios
      .get("menu")
      .then((res: AxiosResponse) => {
        setLoader(false);
        if (res.status === 200) {
          setMenu(res.data);
          setMenuState(res.data.filter((d: dish) => d.cat === cat));
          menuState && setMainDish(menuState[0]);
        } else if (res.status === 204) console.log(res.data.message);
      })
      .catch(() => {
        setLoader(false);
        setServerResponse({
          content: "The Server Is Not Working Write Now , Try Again Letter",
          type: "error",
        });
      });
  }
  function handleIsInCart() {
    if (cart.filter((d) => mainDish?.name === d.name).length > 0)
      setIsInCart(true);
    else setIsInCart(false);
  }
  function handleCart(dish: dish) {
    if (!isInCart) {
      setCart([...cart, { ...dish, cat }]);
      setTotal((prev) => [
        ...prev,
        {
          name: dish.name,
          price: parseInt(dish.price),
          number: 1,
          category: dish.cat,
        },
      ]);
    } else {
      setCart(cart.filter((d) => d.name !== dish?.name));
      setTotal((prev) => prev.filter((d) => d.name !== dish.name));
    }
  }
  useEffect(() => {
    getMenu();
  }, []);
  useEffect(() => {
    setMenuState(menu?.filter((d) => d.cat === cat));
    if (detail !== "all") {
      setMenuState((prev) => prev?.filter((d) => d.type === detail));
    } else {
      setMenuState(menu?.filter((d) => d.cat === cat));
    }
  }, [detail]);
  useEffect(() => {
    setDetail("all");
    setMenuState(menu?.filter((d) => d.cat === cat));
  }, [cat]);
  useEffect(() => {
    setMainDish(undefined);
    setTimeout(() => {
      if (menuState) {
        setMainDish(menuState[0]);
        if (mainDish)
          if (cart.includes(mainDish)) setIsInCart(true);
          else setIsInCart(false);
      }
    }, 1);
  }, [menuState]);
  useEffect(() => {
    handleIsInCart();
  }, [cart, mainDish]);

  return {
    mainDish,
    isToggle,
    setMainDish,
    setIsToggle,
    detail,
    setDetail,
    menuState,
    setMenuState,
    setIsRate,
    isRate,
    getMenu,
    isCart,
    setIsCart,
    cart,
    setCart,
    handleCart,
    isInCart,
    total,
    setTotal,
    setIsComments,
    isComments,
  };
}
export default useMenu;
