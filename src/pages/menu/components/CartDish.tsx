import { useEffect, useState } from "react";
import { dish, menuCategories } from "../../../hooks/useMenu";
import { BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import CoolImage from "../../../components/coolImage/CoolImage";

type props = {
  dish: dish;
  cart: dish[];
  setCart: React.Dispatch<React.SetStateAction<dish[]>>;
  total: {
    name: string;
    price: number;
    number: number;
    category: menuCategories;
  }[];
  setTotal: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        price: number;
        number: number;
        category: menuCategories;
      }[]
    >
  >;
};

function CartDish({ dish, cart, setCart, setTotal, total }: props) {
  const [number, setNumber] = useState(
    total.filter((d) => d.name === dish.name)[0].number
      ? total.filter((d) => d.name === dish.name)[0].number
      : 1
  );
  useEffect(() => {
    setTotal((prev) => [
      ...prev.filter((d) => d.name !== dish.name),
      {
        name: dish.name,
        price: parseInt(dish.price.split(",").join("")) * number,
        number,
        category: dish.cat,
      },
    ]);
  }, [number]);
  return (
    <div
      className="flex g-1 p-1 alt-bg align-center justify-evenly dark-box-shadow relative"
      key={dish.name}
    >
      <div
        className="absolute cl-r fs-med flex r-0 t-0 pointer"
        onClick={() => {
          setCart(cart.filter((d) => d.name !== dish.name));
          setTotal((prev) => prev.filter((d) => d.name !== dish.name));
        }}
      >
        <BiTrash />
      </div>
      <div
        className={`flex fs-med p-1 red_gradient_bg cl-b ${
          number === 1 ? "mouse-none opacity-50" : "pointer opacity-1"
        }`}
        onClick={() => {
          setNumber((prev) => (prev -= 1));
        }}
      >
        <BiMinus />
      </div>
      <div className="details flex flex-column g-1 align-center">
        <CoolImage
          height={""}
          thumb=""
          url={`https://taleb-restaurant-api.onrender.com/asets/${dish.imageName.trim()}`}
          // url={`http://localhost:3500/assets/${dish.imageName.trim()}`}
          width={100}
          type=""
        />
        <span
          className="cl-b khaled-bg bold centering-content"
          style={{
            width: "20px",
            aspectRatio: "1/1",
          }}
        >
          {number}
        </span>
        <span className="name fs-small uppercase bold letter-s-1">
          {dish.name}
        </span>
        <span className="price bold fs-small fs-small cl-g">
          {`${number * parseInt(dish.price.split(",").join(""))} SP`}
        </span>
      </div>
      <div
        className={`flex fs-med p-1 blue_gradient_bg cl-b pointer ${
          number === 20 ? "mouse-none opacity-50" : "pointer opacity-1"
        }`}
        onClick={() => setNumber((prev) => (prev += 1))}
      >
        <BiPlus />
      </div>
    </div>
  );
}
export default CartDish;
