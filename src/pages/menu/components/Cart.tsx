import { motion as m } from "framer-motion";
import { BsCart4 } from "react-icons/bs";
import { IoCloseCircle, IoRestaurantSharp } from "react-icons/io5";
import { dish, menuCategories } from "../../../hooks/useMenu";
import CartDish from "./CartDish";
import { useEffect, useState } from "react";
import AltButton from "../../../components/altButton";
import { BiMoney } from "react-icons/bi";
import { UseContext } from "../../../context/UseContext";
type props = {
  setIsCart: React.Dispatch<React.SetStateAction<boolean>>;
  cart: dish[];
  setCart: React.Dispatch<React.SetStateAction<dish[]>>;
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
  total: {
    name: string;
    price: number;
    number: number;
    category: menuCategories;
  }[];
};
function Cart({ setIsCart, cart, setCart, total, setTotal }: props) {
  const { setIsOrder } = UseContext();
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < total.length; i++) {
      sum += total[i].price;
    }
    setPrice(sum);
  }, [total]);
  return (
    <m.div
      className="cart fixed r-0 h-100 dark-box-shadow main-bg flex flex-column g-2 z-100000 t-0 w-40"
      style={{
        height: "100vh",
        overflow: "auto",
      }}
      initial={{
        opacity: 0,
        right: "-50%",
      }}
      animate={{
        opacity: 1,
        right: "0%",
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div
        className="absolute t-0 r-0 fs-large pointer cl-r flex p-1"
        onClick={() => setIsCart(false)}
      >
        <IoCloseCircle />
      </div>
      <div className="centering-content g-1">
        <div className="flex flex-column g-1 align-center p-2">
          <div className="flex fs-x-large cl-khaled">
            <BsCart4 />
          </div>
          <h1
            className="uppercase cl-w"
            style={{
              textShadow: "1px 1px 10px",
            }}
          >
            cart
          </h1>
        </div>
        <span className="bold cl-g">{price} SP</span>
      </div>
      {cart.length == 0 ? (
        <div className="flex flex-column g-1 align-center justify-center flex-1 p-2">
          <div className="flex fs-x-large cl-t">
            <IoRestaurantSharp />
          </div>
          <p className="cl-t centering-content uppercase bold fs-small letter-s-1 txt-c">
            There Is No Dishes Added To The Cart Yet
          </p>
        </div>
      ) : (
        <div className="flex flex-column g-3">
          {cart.map((d) => {
            return (
              <CartDish
                cart={cart}
                dish={d}
                setCart={setCart}
                key={d.name}
                setTotal={setTotal}
                total={total}
              />
            );
          })}
          <div className="mt-3 p-2">
            <AltButton
              bgColor="khaled-bg"
              color="cl-b"
              content="order"
              Icon={BiMoney}
              fn={() => setIsOrder(true)}
              valid={true}
            />
          </div>
        </div>
      )}
    </m.div>
  );
}
export default Cart;
