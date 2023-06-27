import { motion as m } from "framer-motion";
import { BiLocationPlus, BiMobile, BiMoney, BiUser } from "react-icons/bi";
import { BsCartCheckFill } from "react-icons/bs";
import { GiMoneyStack } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
import { useRef, useState } from "react";
import { addedTypes, chosenTypes } from "../../hooks/useMakeFood";
import { UseContext } from "../../context/UseContext";
import AltButton from "../altButton";
import useRequest from "../../hooks/useRequest";
type props = {
  setIsCart?: (value: React.SetStateAction<boolean>) => void;
  type: string;
  payload:
    | { name: string; price: number; number: number }[]
    | { main: String; typeToChose: chosenTypes; typeToAdd: addedTypes };
  clearCart?: () => void;
};
function Order({ setIsCart, type, payload, clearCart }: props) {
  const { setIsOrder } = UseContext();
  const { postRequest } = useRequest();
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const visaRef = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState(false);
  function getPayload() {
    return {
      name: nameRef.current?.value,
      address: addressRef.current?.value,
      phoneID: phoneRef.current?.value,
      pay: visaRef.current?.checked ? "visa" : "cash",
      [type == "special" ? "specialFood" : "total"]: payload,
      createdAt: {
        date: new Date().toLocaleDateString(),
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
      },
    };
  }
  function handleValid() {
    nameRef.current?.value &&
    phoneRef.current?.value &&
    addressRef.current?.value
      ? setIsValid(true)
      : setIsValid(false);
  }
  function clear() {
    setIsOrder(false);
    setIsCart && setIsCart(false);
    clearCart && clearCart();
  }
  function reset() {
    nameRef.current!.value = "";
    addressRef.current!.value = "";
    phoneRef.current!.value = "";
    handleValid();
  }
  const path = `/order/${type == "special" ? "makeFood" : ""}`;
  return (
    <m.div
      className="fixed overflow-hidden l-50 p-2 radius-s flex flex-column g-2 main-bg dark-box-shadow order"
      style={{
        minWidth: "50%",
        transform: "translateX(-50%)",
        zIndex: 2147483646,
        top: "10%",
      }}
      initial={{
        opacity: 0,
        y: 150,
        x: "-50%",
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: "-50%",
      }}
    >
      <div
        className="absolute t-0 r-0 flex fs-med cl-r pointer"
        onClick={() => setIsOrder(false)}
      >
        <IoCloseCircle />
      </div>
      <div className="centering-content g-1 cl-khaled">
        <h1 className="letter-s-1 uppercase txt-c">order</h1>
        <div className="flex fs-large">
          <BsCartCheckFill />
        </div>
      </div>
      <div className="flex flex-column g-1">
        <p className="cl-t capitalize">What Is Your Name ?</p>
        <div className="input-container flex relative">
          <label
            className="absolute l-0 t-50 flex cl-khaled fs-b-small"
            style={{
              transform: "translateY(-50%)",
            }}
          >
            <BiUser />
          </label>
          <input
            type="text"
            className="cl-w flex-1"
            placeholder="Name"
            id="order-name"
            autoComplete="off"
            style={{
              borderBottom: "1px solid #555",
              paddingLeft: "25px",
            }}
            ref={nameRef}
            onChange={handleValid}
          />
        </div>
      </div>
      <div className="flex flex-column g-1">
        <p className="cl-t capitalize">Where Are you ?</p>
        <div className="input-container flex relative">
          <label
            className="absolute l-0 t-50 flex cl-khaled fs-b-small"
            style={{
              transform: "translateY(-50%)",
            }}
          >
            <BiLocationPlus />
          </label>
          <input
            type="text"
            autoComplete="off"
            id="order-address"
            className="cl-w flex-1"
            placeholder="Address"
            style={{
              borderBottom: "1px solid #555",
              paddingLeft: "25px",
            }}
            ref={addressRef}
            onChange={handleValid}
          />
        </div>
      </div>
      <div className="flex flex-column g-1">
        <p className="cl-t capitalize">what is your phone number</p>
        <div className="input-container flex relative">
          <label
            className="absolute l-0 t-50 flex cl-khaled fs-b-small"
            style={{
              transform: "translateY(-50%)",
            }}
          >
            <BiMobile />
          </label>
          <input
            type="text"
            id="order-phone"
            className="main-bg cl-w flex-1"
            placeholder="Number"
            autoComplete="off"
            style={{
              borderBottom: "1px solid #555",
              paddingLeft: "25px",
            }}
            ref={phoneRef}
            onChange={handleValid}
          />
        </div>
      </div>
      <div className="flex flex-column g-1">
        <p className="cl-t capitalize">how you want to pay ?</p>
        <div className="flex g-3 align-center justify-evenly">
          <div className="flex align-center g-2">
            <input
              type="radio"
              name="pay"
              id="visa"
              defaultChecked
              className="cool_radio relative w-fit dark-box-shadow"
              ref={visaRef}
            />
            <label
              htmlFor="visa"
              className="fs-small uppercase centering-content g-1"
            >
              <span>Visa Card</span>
              <span className="flex cl-m fs-b-small">
                <BiMoney />
              </span>
            </label>
          </div>
          <div className="flex align-center g-2">
            <input
              type="radio"
              name="pay"
              id="cash"
              className="cool_radio relative w-fit"
            />
            <label
              htmlFor="cash"
              className="fs-small uppercase centering-content g-1"
            >
              <span>Cash</span>
              <span className="flex cl-g fs-b-small">
                <GiMoneyStack />
              </span>
            </label>
          </div>
        </div>
      </div>
      <div
        className="w-100 line-bg"
        style={{
          height: "1px",
          transform: "scale(1.5)",
        }}
      ></div>
      <AltButton
        bgColor="khaled-bg"
        color="cl-b"
        content="order"
        valid={isValid}
        fn={() => postRequest(getPayload, path, clear, reset, "order")}
      />
    </m.div>
  );
}
export default Order;
